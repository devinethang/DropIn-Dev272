import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Game</Text>
      <Pressable style={styles.button} onPress={() => console.log('pressed!')}>
        <Text style={styles.buttonText}>Post Game</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 45,
    fontWeight: "700",
    textAlign: "center",
  },
  body: {
    fontSize: 16,
    textAlign: "center",
  },
  hint: {
    marginTop: 24,
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "600",
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
  },
  cardMain: {
    gap: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  cardSub: {
    fontSize: 14,
    color: "#6b7280",
  },
});
