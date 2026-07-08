import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GradientBackground } from "@/components/game/GradientBackground";
import { PrimaryButton } from "@/components/game/PrimaryButton";
import {
  FontSizes,
  GameSpacing,
  GameTheme,
  Radii,
} from "@/constants/gameTheme";
import { useGame } from "@/state/GameContext";

type Outcome =
  | { kind: "ongoing" }
  | { kind: "civilian-win" }
  | { kind: "undercover-win" };

export default function ReadyScreen() {
  const router = useRouter();
  const {
    playerCount,
    assignments,
    eliminated,
    pair,
    toggleEliminated,
    clearEliminated,
    reset,
    startRound,
  } = useGame();

  const eliminatedSet = useMemo(() => new Set(eliminated), [eliminated]);

  const aliveCivilian = assignments.filter(
    (a) => a.role === "civilian" && !eliminatedSet.has(a.index),
  ).length;
  const aliveUndercover = assignments.filter(
    (a) => a.role === "undercover" && !eliminatedSet.has(a.index),
  ).length;

  const outcome: Outcome = useMemo(() => {
    if (eliminated.length === 0) return { kind: "ongoing" };
    if (aliveUndercover === 0) return { kind: "civilian-win" };
    if (aliveUndercover >= aliveCivilian) return { kind: "undercover-win" };
    return { kind: "ongoing" };
  }, [eliminated.length, aliveUndercover, aliveCivilian]);

  const handleNewRound = () => {
    startRound();
    router.replace("/pass");
  };

  const handleHome = () => {
    reset();
    router.replace("/");
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.safe}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconEmoji}>🎭</Text>
            </View>
            <Text style={styles.title}>投票出局</Text>
            <Text style={styles.subtitle}>Wer wird eliminiert?</Text>
          </View>

          <Text style={styles.hint}>
            点击号码标记出局玩家 · Tippe Nummern an
          </Text>

          <View style={styles.grid}>
            {assignments.map((a) => {
              const isOut = eliminatedSet.has(a.index);
              return (
                <Pressable
                  key={a.index}
                  onPress={() => toggleEliminated(a.index)}
                  style={({ pressed }) => [
                    styles.cell,
                    isOut && styles.cellOut,
                    pressed && { opacity: 0.85 },
                  ]}
                >
                  <Text style={[styles.cellNum, isOut && styles.cellNumOut]}>
                    {a.index + 1}
                  </Text>
                  {isOut && outcome.kind !== "ongoing" && (
                    <Text style={styles.cellRole}>
                      {a.role === "undercover" ? "卧底" : "平民"}
                    </Text>
                  )}
                  {isOut && outcome.kind === "ongoing" && (
                    <Text style={styles.cellOutLabel}>OUT</Text>
                  )}
                </Pressable>
              );
            })}
          </View>

          <View style={styles.statRow}>
            <Stat label="存活 · Übrig" value={playerCount - eliminated.length} />
            <Stat label="出局 · Aus" value={eliminated.length} tone="danger" />
          </View>

          <OutcomeBanner outcome={outcome} />

          {outcome.kind !== "ongoing" && pair && (
            <View style={styles.revealCard}>
              <Text style={styles.revealLabel}>本局词 · Wörter</Text>
              <View style={styles.revealRow}>
                <View style={styles.revealHalf}>
                  <Text style={styles.revealRoleC}>平民</Text>
                  <Text style={styles.revealWord}>{pair.civilian.zh}</Text>
                  <Text style={styles.revealWordSub}>{pair.civilian.de}</Text>
                </View>
                <View style={styles.revealDivider} />
                <View style={styles.revealHalf}>
                  <Text style={styles.revealRoleU}>卧底</Text>
                  <Text style={styles.revealWord}>{pair.undercover.zh}</Text>
                  <Text style={styles.revealWordSub}>
                    {pair.undercover.de}
                  </Text>
                </View>
              </View>
            </View>
          )}

          <View style={styles.actions}>
            {outcome.kind === "ongoing" ? (
              <>
                <PrimaryButton
                  label="清除出局 · Zurücksetzen"
                  variant="ghost"
                  onPress={clearEliminated}
                />
                <PrimaryButton
                  label="再来一局 · Neue Runde"
                  variant="ghost"
                  onPress={handleNewRound}
                />
              </>
            ) : (
              <>
                <PrimaryButton
                  label="再来一局 · Neue Runde"
                  onPress={handleNewRound}
                />
                <PrimaryButton
                  label="返回首页 · Zurück"
                  variant="ghost"
                  onPress={handleHome}
                />
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}

function OutcomeBanner({ outcome }: { outcome: Outcome }) {
  if (outcome.kind === "ongoing") {
    return (
      <View style={[styles.banner, styles.bannerOngoing]}>
        <Text style={styles.bannerTitle}>游戏继续</Text>
        <Text style={styles.bannerSub}>Spiel geht weiter</Text>
      </View>
    );
  }
  if (outcome.kind === "civilian-win") {
    return (
      <View style={[styles.banner, styles.bannerCivilian]}>
        <Text style={styles.bannerEmoji}>🎉</Text>
        <Text style={styles.bannerTitle}>平民胜利!</Text>
        <Text style={styles.bannerSub}>Zivilisten gewinnen!</Text>
      </View>
    );
  }
  return (
    <View style={[styles.banner, styles.bannerUnder]}>
      <Text style={styles.bannerEmoji}>🕵️</Text>
      <Text style={styles.bannerTitle}>卧底胜利!</Text>
      <Text style={styles.bannerSub}>Spione gewinnen!</Text>
    </View>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone?: "danger";
}) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text
        style={[
          styles.statValue,
          tone === "danger" && { color: GameTheme.text.danger },
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: {
    paddingHorizontal: GameSpacing.md,
    paddingTop: GameSpacing.sm,
    paddingBottom: GameSpacing.lg,
    gap: GameSpacing.md,
  },
  header: {
    alignItems: "center",
    gap: GameSpacing.xs,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "rgba(255,210,122,0.14)",
    borderWidth: 2,
    borderColor: GameTheme.accent.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  iconEmoji: { fontSize: 36 },
  title: {
    color: GameTheme.text.primary,
    fontSize: FontSizes.h2,
    fontWeight: "800",
    letterSpacing: 3,
  },
  subtitle: {
    color: GameTheme.text.gold,
    fontSize: FontSizes.caption,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  hint: {
    color: GameTheme.text.muted,
    fontSize: FontSizes.small,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: GameSpacing.xs,
  },
  cell: {
    width: 72,
    height: 72,
    borderRadius: Radii.md,
    backgroundColor: GameTheme.card.elevated,
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.16)",
    alignItems: "center",
    justifyContent: "center",
  },
  cellOut: {
    backgroundColor: "rgba(255,122,138,0.18)",
    borderColor: GameTheme.text.danger,
  },
  cellNum: {
    color: GameTheme.text.primary,
    fontSize: FontSizes.h2,
    fontWeight: "800",
  },
  cellNumOut: {
    color: GameTheme.text.danger,
    textDecorationLine: "line-through",
  },
  cellOutLabel: {
    color: GameTheme.text.danger,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: 2,
  },
  cellRole: {
    color: GameTheme.text.secondary,
    fontSize: 10,
    fontWeight: "700",
    marginTop: 2,
  },
  statRow: {
    flexDirection: "row",
    gap: GameSpacing.sm,
  },
  stat: {
    flex: 1,
    backgroundColor: GameTheme.card.base,
    borderRadius: Radii.md,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    padding: GameSpacing.sm,
    alignItems: "center",
  },
  statLabel: {
    color: GameTheme.text.muted,
    fontSize: FontSizes.caption,
    letterSpacing: 1,
  },
  statValue: {
    color: GameTheme.text.gold,
    fontSize: FontSizes.h2,
    fontWeight: "800",
    marginTop: 2,
  },
  banner: {
    width: "100%",
    paddingVertical: GameSpacing.md,
    paddingHorizontal: GameSpacing.md,
    borderRadius: Radii.lg,
    alignItems: "center",
    borderWidth: 1,
    gap: 4,
  },
  bannerOngoing: {
    backgroundColor: "rgba(138,92,255,0.12)",
    borderColor: GameTheme.accent.purple,
  },
  bannerCivilian: {
    backgroundColor: "rgba(122,226,199,0.14)",
    borderColor: GameTheme.text.civilian,
  },
  bannerUnder: {
    backgroundColor: "rgba(255,154,176,0.14)",
    borderColor: GameTheme.text.undercover,
  },
  bannerEmoji: { fontSize: 36, marginBottom: 4 },
  bannerTitle: {
    color: GameTheme.text.primary,
    fontSize: FontSizes.h2,
    fontWeight: "800",
    letterSpacing: 2,
  },
  bannerSub: {
    color: GameTheme.text.secondary,
    fontSize: FontSizes.small,
    letterSpacing: 1,
  },
  revealCard: {
    width: "100%",
    backgroundColor: GameTheme.card.base,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: "rgba(255,210,122,0.3)",
    padding: GameSpacing.md,
    gap: GameSpacing.sm,
  },
  revealLabel: {
    color: GameTheme.text.gold,
    fontSize: FontSizes.caption,
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
  },
  revealRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  revealHalf: {
    flex: 1,
    alignItems: "center",
    gap: 2,
  },
  revealDivider: {
    width: 1,
    height: 60,
    backgroundColor: "rgba(255,255,255,0.15)",
    marginHorizontal: GameSpacing.xs,
  },
  revealRoleC: {
    color: GameTheme.text.civilian,
    fontSize: FontSizes.caption,
    fontWeight: "700",
    letterSpacing: 1,
  },
  revealRoleU: {
    color: GameTheme.text.undercover,
    fontSize: FontSizes.caption,
    fontWeight: "700",
    letterSpacing: 1,
  },
  revealWord: {
    color: GameTheme.text.primary,
    fontSize: FontSizes.h3,
    fontWeight: "800",
    marginTop: 2,
  },
  revealWordSub: {
    color: GameTheme.text.muted,
    fontSize: FontSizes.caption,
  },
  actions: {
    width: "100%",
    gap: GameSpacing.sm,
    marginTop: GameSpacing.xs,
  },
});
