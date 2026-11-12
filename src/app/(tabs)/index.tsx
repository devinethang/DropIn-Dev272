import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { styles } from '@/components/universal2'

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