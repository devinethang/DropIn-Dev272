import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find a Game</Text>
      <Pressable style={styles.button} onPress={() => router.push('/create')}>
        <Text style={styles.buttonText}>+ New Game</Text>
      </Pressable>
    </View>
  );
}

// function GamesRow({ game }: { game: gameType }) {
//   return(
//     <View style={styles.card}>
//       <View style={styles.cardMain}>
//         <Text style={styles.cardTitle}>{game.name}</Text>
//         <Text style={styles.cardSub}>{game.date}, {game.time}, {game.location}</Text>
//       </View>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 45,
    fontWeight: "700",
    textAlign: "left",
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
    alignSelf: "flex-start",
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
