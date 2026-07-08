import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GradientBackground } from "@/components/game/GradientBackground";
import { PrimaryButton } from "@/components/game/PrimaryButton";
import {
  FontSizes,
  GameSpacing,
  GameTheme,
  Radii,
} from "@/constants/gameTheme";
import { Category } from "@/data/wordPairs";
import { useGame } from "@/state/GameContext";

const PLAYER_OPTIONS = [3, 4, 5, 6, 7, 8];
const UNDERCOVER_OPTIONS = [1, 2];

const CATEGORY_OPTIONS: { value: Category | "all"; zh: string; de: string }[] =
  [
    { value: "all", zh: "全部", de: "Alle" },
    { value: "food", zh: "食物", de: "Essen" },
    { value: "animal", zh: "动物", de: "Tiere" },
    { value: "toy", zh: "玩具", de: "Spielzeug" },
    { value: "stationery", zh: "文具", de: "Schule" },
    { value: "sport", zh: "运动", de: "Sport" },
    { value: "cartoon", zh: "卡通", de: "Cartoon" },
    { value: "place", zh: "地点", de: "Orte" },
    { value: "daily", zh: "日用", de: "Alltag" },
  ];

export default function SetupScreen() {
  const router = useRouter();
  const {
    playerCount,
    setPlayerCount,
    undercoverCount,
    setUndercoverCount,
    category,
    setCategory,
    startRound,
  } = useGame();

  const maxUnder = playerCount <= 4 ? 1 : 2;

  const handleStart = () => {
    startRound();
    router.push("/pass");
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.title}>谁是卧底</Text>
            <Text style={styles.subtitle}>Wer lügt?</Text>
          </View>

          <View style={styles.row}>
            <Section title="玩家 · Spieler" style={{ flex: 3 }}>
              <ChipGrid>
                {PLAYER_OPTIONS.map((n) => (
                  <Chip
                    key={n}
                    label={`${n}`}
                    active={playerCount === n}
                    onPress={() => {
                      setPlayerCount(n);
                      if (undercoverCount > (n <= 4 ? 1 : 2)) {
                        setUndercoverCount(1);
                      }
                    }}
                  />
                ))}
              </ChipGrid>
            </Section>

            <Section title="卧底 · Spione" style={{ flex: 1 }}>
              <ChipGrid>
                {UNDERCOVER_OPTIONS.map((n) => (
                  <Chip
                    key={n}
                    label={`${n}`}
                    active={undercoverCount === n}
                    disabled={n > maxUnder}
                    onPress={() => setUndercoverCount(n)}
                  />
                ))}
              </ChipGrid>
            </Section>
          </View>

          <Section title="主题 · Kategorie">
            <ChipGrid>
              {CATEGORY_OPTIONS.map((opt) => (
                <Chip
                  key={opt.value}
                  label={opt.zh}
                  sublabel={opt.de}
                  active={category === opt.value}
                  onPress={() => setCategory(opt.value)}
                />
              ))}
            </ChipGrid>
          </Section>

          <View style={styles.cta}>
            <PrimaryButton label="开始 · Start" onPress={handleStart} />
            <Text style={styles.tip}>
              手机在 {playerCount} 位玩家间传递 · {undercoverCount} 个卧底
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}

function Section({
  title,
  children,
  style,
}: {
  title: string;
  children: React.ReactNode;
  style?: any;
}) {
  return (
    <View style={[styles.section, style]}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function ChipGrid({ children }: { children: React.ReactNode }) {
  return <View style={styles.chipRow}>{children}</View>;
}

function Chip({
  label,
  sublabel,
  active,
  onPress,
  disabled,
}: {
  label: string;
  sublabel?: string;
  active?: boolean;
  onPress?: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.chip,
        active && styles.chipActive,
        pressed && !disabled && { opacity: 0.85 },
        disabled && styles.chipDisabled,
      ]}
    >
      <Text style={[styles.chipLabel, active && styles.chipLabelActive]}>
        {label}
      </Text>
      {sublabel ? (
        <Text style={[styles.chipSub, active && styles.chipSubActive]}>
          {sublabel}
        </Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: {
    paddingHorizontal: GameSpacing.md,
    paddingBottom: GameSpacing.lg,
    gap: GameSpacing.md,
  },
  header: {
    paddingTop: GameSpacing.sm,
    paddingBottom: GameSpacing.xs,
    alignItems: "center",
  },
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
    marginTop: 2,
  },
  row: {
    flexDirection: "row",
    gap: GameSpacing.sm,
  },
  section: {
    gap: GameSpacing.xs,
  },
  sectionTitle: {
    color: GameTheme.text.gold,
    fontSize: FontSizes.small,
    fontWeight: "600",
    letterSpacing: 1,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  chip: {
    minWidth: 44,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: Radii.sm,
    backgroundColor: GameTheme.card.base,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    alignItems: "center",
    justifyContent: "center",
  },
  chipActive: {
    backgroundColor: "rgba(255,210,122,0.18)",
    borderColor: GameTheme.accent.gold,
  },
  chipDisabled: {
    opacity: 0.3,
  },
  chipLabel: {
    color: GameTheme.text.secondary,
    fontSize: FontSizes.body,
    fontWeight: "600",
  },
  chipLabelActive: {
    color: GameTheme.text.gold,
  },
  chipSub: {
    color: GameTheme.text.muted,
    fontSize: 10,
    marginTop: 1,
  },
  chipSubActive: {
    color: GameTheme.text.secondary,
  },
  cta: {
    marginTop: GameSpacing.sm,
    gap: GameSpacing.xs,
    alignItems: "center",
  },
  tip: {
    color: GameTheme.text.muted,
    fontSize: FontSizes.caption,
    textAlign: "center",
  },
});
