import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Platform, Pressable, StyleSheet, Text, View } from "react-native";
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

type Phase = "handoff" | "reveal" | "hide";

export default function PassScreen() {
  const router = useRouter();
  const { assignments, currentIndex, advance, playerCount, startRound } =
    useGame();
  const [phase, setPhase] = useState<Phase>("handoff");

  // safety: if state empty (deep link), bounce back
  useEffect(() => {
    if (assignments.length === 0) {
      router.replace("/");
    }
  }, [assignments.length, router]);

  if (assignments.length === 0) return null;

  const current = assignments[currentIndex];
  const playerNum = currentIndex + 1;
  const isLast = currentIndex === playerCount - 1;

  const handleHidden = () => {
    if (isLast) {
      router.replace("/ready");
    } else {
      advance();
      setPhase("handoff");
    }
  };

  const handleRestart = () => {
    const doRestart = () => {
      startRound();
      setPhase("handoff");
    };
    if (Platform.OS === "web") {
      const ok = window.confirm(
        "重新开始?将抽取新的词,从 1 号重新开始。\nNeue Runde starten?",
      );
      if (ok) doRestart();
      return;
    }
    Alert.alert(
      "重新开始?",
      "Neue Runde starten? 将抽取新的词,从 1 号重新开始。",
      [
        { text: "取消 · Abbrechen", style: "cancel" },
        {
          text: "重新开始 · Neu",
          style: "destructive",
          onPress: doRestart,
        },
      ],
    );
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.safe}>
        <View style={styles.topBar}>
          <View style={styles.progress}>
            {assignments.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.progressDot,
                  i < currentIndex && styles.progressDone,
                  i === currentIndex && styles.progressActive,
                ]}
              />
            ))}
          </View>
          <Pressable
            onPress={handleRestart}
            style={({ pressed }) => [
              styles.restartBtn,
              pressed && { opacity: 0.7 },
            ]}
            hitSlop={12}
          >
            <Text style={styles.restartIcon}>↻</Text>
            <Text style={styles.restartLabel}>重开</Text>
          </Pressable>
        </View>

        <View style={styles.body}>
          {phase === "handoff" && (
            <Handoff
              playerNum={playerNum}
              onContinue={() => setPhase("reveal")}
            />
          )}
          {phase === "reveal" && (
            <Reveal
              word={current.word}
              playerNum={playerNum}
              onDone={() => setPhase("hide")}
            />
          )}
          {phase === "hide" && (
            <Hide
              isLast={isLast}
              nextPlayer={playerNum + 1}
              onDone={handleHidden}
            />
          )}
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
}

function Handoff({
  playerNum,
  onContinue,
}: {
  playerNum: number;
  onContinue: () => void;
}) {
  return (
    <View style={styles.center}>
      <Text style={styles.eyebrow}>把手机递给</Text>
      <View style={styles.bigCircle}>
        <Text style={styles.bigCircleNum}>{playerNum}</Text>
      </View>
      <Text style={styles.lead}>玩家 {playerNum} 号</Text>
      <Text style={styles.hint}>
        其他人请闭眼,只有 {playerNum} 号能看屏幕
      </Text>
      <View style={{ height: GameSpacing.xl }} />
      <PrimaryButton label="我准备好了 · Bereit" onPress={onContinue} />
    </View>
  );
}

function Reveal({
  word,
  playerNum,
  onDone,
}: {
  word: { zh: string; de: string };
  playerNum: number;
  onDone: () => void;
}) {
  const [holding, setHolding] = useState(false);

  return (
    <View style={styles.center}>
      <Text style={styles.eyebrow}>玩家 {playerNum} 号 · 你的词</Text>
      <Pressable
        onPressIn={() => setHolding(true)}
        onPressOut={() => setHolding(false)}
        style={styles.wordCard}
      >
        {holding ? (
          <View style={styles.wordStack}>
            <Text
              style={styles.wordText}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.5}
            >
              {word.zh}
            </Text>
            <View style={styles.divider} />
            <Text
              style={styles.wordSubText}
              numberOfLines={2}
              adjustsFontSizeToFit
              minimumFontScale={0.6}
            >
              {word.de}
            </Text>
          </View>
        ) : (
          <View style={styles.cover}>
            <Text style={styles.coverHint}>长按查看</Text>
            <Text style={styles.coverSub}>Halten zum Anzeigen</Text>
          </View>
        )}
      </Pressable>
      <Text style={styles.hint}>
        记住自己的词,不要让别人看到
      </Text>
      <View style={{ height: GameSpacing.xl }} />
      <PrimaryButton label="我记住了 · Verstanden" onPress={onDone} />
    </View>
  );
}

function Hide({
  isLast,
  nextPlayer,
  onDone,
}: {
  isLast: boolean;
  nextPlayer: number;
  onDone: () => void;
}) {
  return (
    <View style={styles.center}>
      <View style={styles.lockCircle}>
        <Text style={styles.lockEmoji}>🤫</Text>
      </View>
      <Text style={styles.lead}>
        {isLast ? "全部完成!" : `把手机交给 ${nextPlayer} 号`}
      </Text>
      <Text style={styles.hint}>
        {isLast
          ? "下一步开始描述与投票"
          : `${nextPlayer} 号点继续后才看屏幕`}
      </Text>
      <View style={{ height: GameSpacing.xl }} />
      <PrimaryButton
        label={isLast ? "进入游戏 · Los geht's" : "继续 · Weiter"}
        onPress={onDone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: GameSpacing.md,
    paddingHorizontal: GameSpacing.md,
  },
  progress: {
    flexDirection: "row",
    justifyContent: "center",
    gap: GameSpacing.xs,
    flex: 1,
  },
  restartBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: Radii.pill,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
  restartIcon: {
    color: GameTheme.text.gold,
    fontSize: 16,
    fontWeight: "700",
  },
  restartLabel: {
    color: GameTheme.text.secondary,
    fontSize: FontSizes.caption,
    fontWeight: "600",
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  progressActive: {
    backgroundColor: GameTheme.accent.gold,
    width: 24,
  },
  progressDone: {
    backgroundColor: "rgba(255,210,122,0.45)",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: GameSpacing.lg,
  },
  center: {
    alignItems: "center",
    gap: GameSpacing.sm,
  },
  eyebrow: {
    color: GameTheme.text.gold,
    fontSize: FontSizes.small,
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  bigCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(255,210,122,0.12)",
    borderWidth: 2,
    borderColor: GameTheme.accent.gold,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: GameTheme.accent.gold,
    shadowOpacity: 0.5,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 0 },
  },
  bigCircleNum: {
    color: GameTheme.text.gold,
    fontSize: 96,
    fontWeight: "800",
  },
  lead: {
    color: GameTheme.text.primary,
    fontSize: FontSizes.h2,
    fontWeight: "700",
    marginTop: GameSpacing.md,
  },
  hint: {
    color: GameTheme.text.muted,
    fontSize: FontSizes.body,
    textAlign: "center",
    paddingHorizontal: GameSpacing.lg,
  },
  wordCard: {
    width: "100%",
    minHeight: 220,
    borderRadius: Radii.xl,
    backgroundColor: GameTheme.card.elevated,
    borderWidth: 1.5,
    borderColor: GameTheme.card.border,
    alignItems: "center",
    justifyContent: "center",
    padding: GameSpacing.xl,
    marginVertical: GameSpacing.lg,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
  },
  wordText: {
    color: GameTheme.text.primary,
    fontSize: FontSizes.display,
    fontWeight: "800",
    letterSpacing: 2,
    textAlign: "center",
  },
  wordStack: {
    alignItems: "center",
    gap: GameSpacing.sm,
    width: "100%",
  },
  wordSubText: {
    color: GameTheme.text.gold,
    fontSize: FontSizes.h3,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
  },
  divider: {
    height: 1,
    width: 60,
    backgroundColor: "rgba(255,210,122,0.4)",
  },
  cover: {
    alignItems: "center",
    gap: GameSpacing.xs,
  },
  coverHint: {
    color: GameTheme.text.gold,
    fontSize: FontSizes.h3,
    fontWeight: "700",
    letterSpacing: 2,
  },
  coverSub: {
    color: GameTheme.text.muted,
    fontSize: FontSizes.small,
    letterSpacing: 1,
  },
  lockCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(138,92,255,0.18)",
    borderWidth: 2,
    borderColor: GameTheme.accent.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  lockEmoji: {
    fontSize: 64,
  },
});
