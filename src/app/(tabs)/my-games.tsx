import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "@/components/universal";
import { gameList, DATA } from ".";

export default function MyGames() {
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
      <Text style={styles.title}>My Games</Text>
      <Pressable style={styles.button} onPress={() => router.push("/sign-in")}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>

      {/* not sure how to seperate data between which goes to who. I still struggle with passing data*/}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
