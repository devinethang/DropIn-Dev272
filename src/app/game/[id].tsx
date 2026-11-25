import { joinGame, leaveGame } from "@/api/games";
import { GameQueryState } from "@/components/GameQueryState";
import { styles } from "@/components/universal";
import { formatGameDate, formatGameTime } from "@/data/games";
import { useCurrentUserId } from "@/hooks/useCurrentUserId";
import { useGames } from "@/hooks/useGames";
import { errorMessage } from "@/lib/errorMessage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GameDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const gamesQuery = useGames();
  const game = gamesQuery.data?.find((item) => item.id === id);
  const userId = useCurrentUserId();
  const [pending, setPending] = useState(false);

  if (gamesQuery.isLoading || gamesQuery.isError) {
    return (
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <View style={styles.container}>
          <GameQueryState
            isLoading={gamesQuery.isLoading}
            isError={gamesQuery.isError}
            retry={() => void gamesQuery.refetch()}
          />
        </View>
      </SafeAreaView>
    );
  }

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

  const hasJoined = userId !== null && game.participant_ids.includes(userId);
  async function handlePress() {
    if (!game) return;
    setPending(true);
    try {
      if (hasJoined) {
        await leaveGame(game.id);
      } else {
        await joinGame(game.id);
      }
      await gamesQuery.refetch();
    } catch (error) {
      Alert.alert(
        hasJoined ? "Unable to leave game" : "Unable to join game",
        errorMessage(error),
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.form}>
        <View accessible={true} accessibilityLabel={`Name: ${game.title}`}>
          <Text style={styles.title}>{game.title}</Text>
        </View>

        <View style={styles.dataDisplay}>
          <View accessible={true} accessibilityLabel={`Sport: ${game.sport}`}>
            <Text style={styles.cardTitle}>Sport</Text>
            <Text>{game.sport}</Text>
          </View>

          <View
            accessible={true}
            accessibilityLabel={`Date: ${formatGameDate(game.event_date)}`}
          >
            <Text style={styles.cardTitle}>Date</Text>
            <Text>{formatGameDate(game.event_date)}</Text>
          </View>

          <View
            accessible={true}
            accessibilityLabel={`Time: ${formatGameTime(game.event_date)}`}
          >
            <Text style={styles.cardTitle}>Time</Text>
            <Text>{formatGameTime(game.event_date)}</Text>
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
          <Text>{game.description || "No description provided."}</Text>
        </View>

        <Pressable
          style={styles.LoginButton}
          onPress={handlePress}
          accessibilityRole="button"
          disabled={pending || userId === null}
          accessibilityLabel={hasJoined ? "Leave game" : "Join Game"}
          accessibilityState={{ disabled: pending || userId === null }}
        >
          <Text style={styles.buttonText}>
            {pending
              ? "Processing..."
              : hasJoined
                ? "Leave Game"
                : "Join Game"}{" "}
          </Text>
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
