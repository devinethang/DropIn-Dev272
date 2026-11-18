import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { EmptyState } from "../../components/EmptyState";
import { GameCard } from "../../components/GameCard";
import {
  CURRENT_USER_ID,
  PLACEHOLDER_GAMES,
  getHostedGames,
  getJoinedGames,
  type Game,
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

type Props = {
  // The router renders this screen with no props, so these defaults are used.
  // Tests pass their own values.
  initialGames?: Game[];
  userId?: string;
};

export default function MyGamesScreen({
  initialGames = PLACEHOLDER_GAMES,
  userId = CURRENT_USER_ID,
}: Props) {
  const router = useRouter();
  const [games, setGames] = useState<Game[]>(initialGames);
  const [tab, setTab] = useState<Tab>("joined");

  const visible = useMemo(
    () =>
      tab === "joined"
        ? getJoinedGames(games, userId)
        : getHostedGames(games, userId),
    [games, tab, userId],
  );

  const openGame = (id: string) =>
    router.push({ pathname: "/game/[id]", params: { id } });

  // Placeholder: removes the game locally. Will call Supabase once #20 is done.
  const cancelGame = (id: string) =>
    setGames((prev) => prev.filter((g) => g.id !== id));

  return (
    <View style={styles.screen}>
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
                tab === "hosting" ? () => cancelGame(item.id) : undefined
              }
            />
          )}
          ListEmptyComponent={
            <EmptyState
              title="No upcoming games"
              message={EMPTY_MESSAGES[tab]}
            />
          }
        />
      </View>
    </View>
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
