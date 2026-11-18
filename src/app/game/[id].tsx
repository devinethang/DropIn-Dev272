import { styles } from "@/components/universal";
import { DATA } from "@/data/games";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GameDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const game = DATA.find((item) => item.id === id);

  if (!game) {
    return (
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <View style={styles.container}>
          <Text style={styles.title}>Game Not Found</Text>
          <Pressable
            style={styles.listButton}
            onPress={() => router.replace("/(tabs)/explore")}
          >
            <Text>Back to Explore</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.form}>
        <View accessible={true} accessibilityLabel={`Name: ${game.name}`}>
          <Text style={styles.title}>{game.name}</Text>
        </View>

        <View style={styles.dataDisplay}>
          <View accessible={true} accessibilityLabel={`Sport: ${game.sport}`}>
            <Text style={styles.cardTitle}>Sport</Text>
            <Text>{game.sport}</Text>
          </View>

          <View accessible={true} accessibilityLabel={`Date: ${game.date}`}>
            <Text style={styles.cardTitle}>Date</Text>
            <Text>{game.date}</Text>
          </View>

          <View accessible={true} accessibilityLabel={`Time: ${game.time}`}>
            <Text style={styles.cardTitle}>Time</Text>
            <Text>{game.time}</Text>
          </View>

          <View
            accessible={true}
            accessibilityLabel={`Location: ${game.location}`}
          >
            <Text style={styles.cardTitle}>Location</Text>
            <Text>{game.location}</Text>
          </View>
        </View>

        <View style={styles.dataDisplay}>
          <Text style={styles.cardTitle}>Description</Text>
          <Text>
            Join this recreational {game.sport.toLowerCase()} game and enjoy
            playing with other members of the community.
          </Text>
        </View>

        <Pressable
          style={styles.LoginButton}
          accessibilityRole="button"
          accessibilityState={{ disabled: true }}
          disabled
        >
          <Text style={styles.buttonText}>Join Game</Text>
        </Pressable>

        <Pressable
          style={styles.listButton}
          onPress={() => router.replace("/(tabs)/explore")}
        >
          <Text>Back to Explore</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
