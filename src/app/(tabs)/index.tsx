import { styles } from "@/components/universal";
import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

export type gameList = {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
};

//Placeholder, once proper things are in place, this is to be deleted.
export const DATA = [
  { id: "1", game: "baseball" },
  { id: "2", game: "football" },
  { id: "3", game: "basketball" },
  { id: "4", game: "soccer" },
  { id: "5", game: "lacrosse" },
];

export default function Index() {
  const router = useRouter();

  const renderItem = ({ item }: { item: (typeof DATA)[0] }) => (
    <Pressable
      onPress={() => console.log("Pressed!")}
      style={styles.listButton}
    >
      {/*for some reason, this requires <text></text> to have capital T's. Don't understand why.*/}
      <text>{item.id}</text>
      <text>{item.game}</text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find a Game</Text>
      <Pressable style={styles.button} onPress={() => router.push("/create")}>
        <Text style={styles.buttonText}>+ New Game</Text>
      </Pressable>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
