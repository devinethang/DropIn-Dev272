import { Pressable, StyleSheet, Text, View } from "react-native";
import { formatGameDate, formatGameTime, type Game } from "../data/games";
import { colors } from "./universal";

type Props = {
  game: Game;
  onPress: () => void;

  onCancel?: () => void;

  countStyle?: "fraction" | "spotsLeft";
};

export function getCountLabel(
  game: Game,
  countStyle: "fraction" | "spotsLeft" = "fraction",
): string {
  const joined = game.participant_ids.length;
  if (countStyle === "fraction") return `${joined} / ${game.capacity}`;
  const left = Math.max(game.capacity - joined, 0);
  if (left === 0) return "Full";
  return `${left} ${left === 1 ? "spot" : "spots"} left`;
}

export function GameCard({
  game,
  onPress,
  onCancel,
  countStyle = "fraction",
}: Props) {
  const date = formatGameDate(game.event_date);
  const time = formatGameTime(game.event_date);
  const count = getCountLabel(game, countStyle);
  const isFull = game.participant_ids.length >= game.capacity;

  return (
    <View style={[styles.card, isFull && styles.cardFull]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.body, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel={`${game.title}, ${game.sport}, ${date} at ${time}, ${game.location}, ${count}`}
        accessibilityHint="Opens game details"
      >
        <View style={styles.topRow}>
          <Text
            style={[styles.title, isFull && styles.textFull]}
            numberOfLines={1}
          >
            {game.title}
          </Text>
          <Text
            style={[
              styles.count,
              countStyle === "spotsLeft" && styles.countStrong,
              isFull && styles.textFull,
            ]}
          >
            {count}
          </Text>
        </View>
        <Text style={styles.meta} numberOfLines={1}>
          {game.sport} · {date} · {time}
        </Text>
        <Text style={styles.meta} numberOfLines={1}>
          {game.location}
        </Text>
      </Pressable>

      {onCancel && (
        <Pressable
          onPress={onCancel}
          style={styles.cancel}
          accessibilityRole="button"
          accessibilityLabel={`Cancel ${game.title}`}
        >
          <Text style={styles.cancelText}>Cancel game</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: 12,
    overflow: "hidden",
  },
  cardFull: { borderStyle: "dashed", borderColor: colors.silver },
  body: { padding: 14, gap: 4 },
  pressed: { backgroundColor: colors.ice },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  title: { flexShrink: 1, fontSize: 16, fontWeight: "600", color: colors.text },
  count: { fontSize: 13, color: colors.muted },
  countStrong: { fontWeight: "600", color: colors.text },
  textFull: { color: colors.muted },
  meta: { fontSize: 14, color: colors.muted },
  cancel: {
    alignSelf: "flex-start",
    minHeight: 44,
    justifyContent: "center",
    marginHorizontal: 14,
    marginBottom: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
  },
  cancelText: { fontSize: 14, fontWeight: "600", color: colors.primary },
});
