import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { Category, WORD_PAIRS, WordPair } from "@/data/wordPairs";

export type Lang = "zh" | "de";

export interface PlayerAssignment {
  index: number; // 0-based
  role: "civilian" | "undercover";
  word: { zh: string; de: string };
}

interface GameState {
  playerCount: number;
  undercoverCount: number;
  lang: Lang;
  category: Category | "all";
  assignments: PlayerAssignment[];
  currentIndex: number; // who is currently holding the phone
  pair: WordPair | null;
  eliminated: number[]; // 0-based indices
}

interface GameActions {
  setPlayerCount: (n: number) => void;
  setUndercoverCount: (n: number) => void;
  setLang: (l: Lang) => void;
  setCategory: (c: Category | "all") => void;
  startRound: () => void;
  advance: () => void;
  reset: () => void;
  toggleEliminated: (index: number) => void;
  clearEliminated: () => void;
}

const GameContext = createContext<(GameState & GameActions) | null>(null);

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [playerCount, setPlayerCount] = useState(4);
  const [undercoverCount, setUndercoverCount] = useState(1);
  const [lang, setLang] = useState<Lang>("zh");
  const [category, setCategory] = useState<Category | "all">("all");
  const [assignments, setAssignments] = useState<PlayerAssignment[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pair, setPair] = useState<WordPair | null>(null);
  const [eliminated, setEliminated] = useState<number[]>([]);

  const startRound = useCallback(() => {
    const pool =
      category === "all"
        ? WORD_PAIRS
        : WORD_PAIRS.filter((p) => p.category === category);
    const picked = pool[Math.floor(Math.random() * pool.length)];
    const chosen: WordPair =
      Math.random() < 0.5
        ? picked
        : {
            ...picked,
            civilian: picked.undercover,
            undercover: picked.civilian,
          };

    const indices = Array.from({ length: playerCount }, (_, i) => i);
    const undercoverIdxs = new Set(shuffle(indices).slice(0, undercoverCount));

    const next: PlayerAssignment[] = indices.map((i) => {
      const isUnder = undercoverIdxs.has(i);
      const source = isUnder ? chosen.undercover : chosen.civilian;
      return {
        index: i,
        role: isUnder ? "undercover" : "civilian",
        word: { zh: source.zh, de: source.de },
      };
    });

    setPair(chosen);
    setAssignments(next);
    setCurrentIndex(0);
    setEliminated([]);
  }, [category, playerCount, undercoverCount, lang]);

  const advance = useCallback(() => {
    setCurrentIndex((i) => i + 1);
  }, []);

  const reset = useCallback(() => {
    setAssignments([]);
    setCurrentIndex(0);
    setPair(null);
    setEliminated([]);
  }, []);

  const toggleEliminated = useCallback((index: number) => {
    setEliminated((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  }, []);

  const clearEliminated = useCallback(() => {
    setEliminated([]);
  }, []);

  const value = useMemo(
    () => ({
      playerCount,
      undercoverCount,
      lang,
      category,
      assignments,
      currentIndex,
      pair,
      eliminated,
      setPlayerCount,
      setUndercoverCount,
      setLang,
      setCategory,
      startRound,
      advance,
      reset,
      toggleEliminated,
      clearEliminated,
    }),
    [
      playerCount,
      undercoverCount,
      lang,
      category,
      assignments,
      currentIndex,
      pair,
      eliminated,
      startRound,
      advance,
      reset,
      toggleEliminated,
      clearEliminated,
    ],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}
