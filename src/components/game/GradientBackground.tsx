import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import { GameTheme } from "@/constants/gameTheme";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function GradientBackground({ children, style }: Props) {
  return (
    <View style={[styles.root, style]}>
      <LinearGradient
        colors={[GameTheme.bg.top, GameTheme.bg.mid, GameTheme.bg.bottom]}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFill}
      />
      {/* decorative blurred orbs */}
      <View style={[styles.orb, styles.orbGold]} />
      <View style={[styles.orb, styles.orbPurple]} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    overflow: "hidden",
  },
  orb: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: 999,
    opacity: 0.18,
  },
  orbGold: {
    backgroundColor: GameTheme.accent.gold,
    top: -120,
    right: -100,
  },
  orbPurple: {
    backgroundColor: GameTheme.accent.purple,
    bottom: -140,
    left: -100,
  },
});
