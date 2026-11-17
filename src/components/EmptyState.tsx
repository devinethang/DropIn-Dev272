import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  message: string;
};

export function EmptyState({ title, message }: Props) {
  return (
    <View style={styles.box} accessibilityRole="summary">
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 18,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#BDBDBD",
    borderRadius: 12,
    alignItems: "center",
    gap: 4,
  },
  title: { fontSize: 14, fontWeight: "600", color: "#1F1F1F" },
  message: { fontSize: 13, color: "#5E5E5E", textAlign: "center" },
});
