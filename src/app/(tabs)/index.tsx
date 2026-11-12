import { styles } from '@/components/universal';
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

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

type gameType = {
  name: string;
  date: string;
  time: string;
  location: string;
};

const game: gameType[] = [
  {name: 'Soccer', date: '01/01/2001', time: '1200', location: 'Park'},
];

function GamesRow({ game }: { game: gameType }) {
  return(
    <View style={styles.card}>
      <View style={styles.cardMain}>
        <Text style={styles.cardTitle}>{game.name}</Text>
        <Text style={styles.cardSub}>{game.date}, {game.time}, {game.location}</Text>
      </View>
    </View>
  )
}