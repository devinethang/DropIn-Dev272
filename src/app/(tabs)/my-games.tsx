import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { styles } from '@/components/universal2'

export default function MyGames() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Games</Text>
      <Pressable style={styles.button} onPress={() => router.push('/sign-in')}>
        <Text style={styles.buttonText}>Sign Out</Text>
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