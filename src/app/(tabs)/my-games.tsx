import { useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { EmptyState } from "../../components/EmptyState";
import { GameCard } from "../../components/GameCard";
import { GameQueryState } from "../../components/GameQueryState";
import { useCancelGame, useGames } from "../../hooks/useGames";
import { errorMessage } from "../../lib/errorMessage";
import {
  CURRENT_USER_ID,
  getHostedGames,
  getJoinedGames,
} from "../../data/games";

type Tab = "joined" | "hosting";

const TABS: { key: Tab; label: string }[] = [
  { key: "joined", label: "Joined" },
  { key: "hosting", label: "Hosting" },
];

const EMPTY_MESSAGES: Record<Tab, string> = {
  joined: "You haven't joined any games yet.",
  hosting: "You aren't hosting any games yet.",
};

export default function MyGamesScreen() {
  const router = useRouter();
  const gamesQuery = useGames();
  const cancel = useCancelGame();
  const [tab, setTab] = useState<Tab>("joined");

  const visible = useMemo(() => {
    const games = gamesQuery.data ?? [];
    return tab === "joined"
      ? getJoinedGames(games, CURRENT_USER_ID)
      : getHostedGames(games, CURRENT_USER_ID);
  }, [gamesQuery.data, tab]);

  const openGame = (id: string) =>
    router.push({ pathname: "/game/[id]", params: { id } });

  const cancelGame = async (id: string) => {
    try {
      await cancel.mutateAsync(id);
    } catch (error) {
      Alert.alert("Unable to cancel game", errorMessage(error));
    }
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title} accessibilityRole="header">
            My Games
          </Text>
        </View>

        <View style={styles.tabs} accessibilityRole="tablist">
          {TABS.map(({ key, label }) => {
            const selected = tab === key;
            return (
              <Pressable
                key={key}
                onPress={() => setTab(key)}
                style={[styles.tab, selected && styles.tabSelected]}
                accessibilityRole="tab"
                accessibilityState={{ selected }}
              >
                <Text
                  style={[styles.tabText, selected && styles.tabTextSelected]}
                >
                  {label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <FlatList
          data={visible}
          keyExtractor={(g) => g.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <GameCard
              game={item}
              onPress={() => openGame(item.id)}
              onCancel={
                tab === "hosting" && !cancel.isPending
                  ? () => void cancelGame(item.id)
                  : undefined
              }
            />
          )}
          ListEmptyComponent={
            gamesQuery.isLoading || gamesQuery.isError ? (
              <GameQueryState
                isLoading={gamesQuery.isLoading}
                isError={gamesQuery.isError}
                retry={() => void gamesQuery.refetch()}
              />
            ) : (
              <EmptyState
                title="No upcoming games"
                message={EMPTY_MESSAGES[tab]}
              />
            )
          }
        />
      </View>
    </SafeAreaView>
  );
}

const INK = "#1F1F1F";
const MUTED = "#5E5E5E";

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FFFFFF" },
  // Caps the width on tablets and keeps it centered; full width on phones.
  content: { flex: 1, width: "100%", maxWidth: 600, alignSelf: "center" },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
  },
  title: { fontSize: 26, fontWeight: "700", color: INK },
  tabs: {
    flexDirection: "row",
    marginHorizontal: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: "#BDBDBD",
  },
  tab: {
    flex: 1,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  tabSelected: { borderBottomColor: INK },
  tabText: { fontSize: 15, color: MUTED },
  tabTextSelected: { fontWeight: "700", color: INK },
  list: { flexGrow: 1, gap: 12, padding: 20 },
});
