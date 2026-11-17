import { DATA } from "@/app/(tabs)/index";
import { styles } from "@/components/universal";
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
        <Text style={styles.title}>{game.name}</Text>

        <View style={styles.dataDisplay}>
          <Text style={styles.cardTitle}>Sport</Text>
          <Text>{game.sport}</Text>

          <Text style={styles.cardTitle}>Date</Text>
          <Text>{game.date}</Text>

          <Text style={styles.cardTitle}>Time</Text>
          <Text>{game.time}</Text>

          <Text style={styles.cardTitle}>Location</Text>
          <Text>{game.location}</Text>
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
