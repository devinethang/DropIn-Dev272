import { colors, styles } from "@/components/universal";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export type gameList = {
  id: string;
  name: string;
  sport: string;
  date: string;
  time: string;
  location: string;
};

export const DATA: gameList[] = [
  {
    id: "1",
    name: "Community Baseball Game",
    sport: "Baseball",
    date: "Saturday",
    time: "10:00 AM",
    location: "Local Baseball Field",
  },
  {
    id: "2",
    name: "Weekend Football",
    sport: "Football",
    date: "Sunday",
    time: "12:00 PM",
    location: "Community Sports Field",
  },
  {
    id: "3",
    name: "Pickup Basketball",
    sport: "Basketball",
    date: "Friday",
    time: "5:00 PM",
    location: "Community Basketball Court",
  },
  {
    id: "4",
    name: "Friendly Soccer Match",
    sport: "Soccer",
    date: "Saturday",
    time: "2:00 PM",
    location: "Local Soccer Field",
  },
  {
    id: "5",
    name: "Lacrosse Practice Game",
    sport: "Lacrosse",
    date: "Sunday",
    time: "3:00 PM",
    location: "Community Sports Park",
  },
];

const sports = [
  "All",
  "Soccer",
  "Basketball",
  "Football",
  "Baseball",
  "Lacrosse",
];

export default function Index() {
  const router = useRouter();
  const [selectedSport, setSelectedSport] = useState("All");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const query = search.trim().toLowerCase();

  const filteredGames = DATA.filter((game) => {
    const matchesSport =
      selectedSport === "All" || game.sport === selectedSport;

    const matchesSearch =
      game.name.toLowerCase().includes(query) ||
      game.sport.toLowerCase().includes(query) ||
      game.location.toLowerCase().includes(query);

    return matchesSport && matchesSearch;
  });

  const isBrowsing = showAll || query.length > 0;

  const visibleGames = isBrowsing ? filteredGames : filteredGames.slice(0, 1);

  const renderItem = ({ item }: { item: gameList }) => (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/game/[id]",
          params: { id: item.id },
        })
      }
      style={styles.listButton}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Text style={[styles.cardTitle, { flex: 1 }]} numberOfLines={2}>
          {item.name}
        </Text>

        <View
          style={{
            backgroundColor: colors.ice,
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: colors.primary,
              fontSize: 12,
              fontWeight: "600",
            }}
          >
            {item.sport}
          </Text>
        </View>
      </View>

      <Text style={styles.cardSub}>
        {item.date} at {item.time}
      </Text>

      <Text style={styles.cardSub}>{item.location}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={visibleGames}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 24,
        }}
        ListHeaderComponent={
          <View>
            <View
              style={{
                marginTop: 40,
                marginBottom: 26,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/drop-in-logo.png")}
                style={{
                  width: 82,
                  height: 82,
                  marginBottom: 10,
                }}
                resizeMode="contain"
              />

              <Text
                style={{
                  fontSize: 38,
                  fontWeight: "800",
                  letterSpacing: 3,
                  color: colors.primary,
                  textAlign: "center",
                }}
              >
                DROP IN
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: colors.secondary,
                  textAlign: "center",
                  marginTop: 8,
                }}
              >
                Find your game. Join the fun.
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colors.surface,
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 14,
                paddingHorizontal: 16,
                marginBottom: 18,
              }}
            >
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search games, sports, or locations..."
                placeholderTextColor={colors.muted}
                style={{
                  flex: 1,
                  color: colors.text,
                  fontSize: 15,
                  paddingVertical: 14,
                }}
                returnKeyType="search"
                accessibilityLabel="Search games"
              />

              {search.length > 0 && (
                <Pressable
                  onPress={() => setSearch("")}
                  accessibilityRole="button"
                  accessibilityLabel="Clear search"
                >
                  <Text
                    style={{
                      color: colors.primary,
                      fontWeight: "600",
                    }}
                  >
                    Clear
                  </Text>
                </Pressable>
              )}
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: 12,
                marginBottom: 26,
              }}
            >
              <Pressable
                style={[
                  styles.button,
                  {
                    flex: 1,
                    height: 52,
                    paddingVertical: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
                onPress={() => router.push("/create")}
              >
                <Text style={styles.buttonText}>New Game</Text>
              </Pressable>

              <Pressable
                style={{
                  flex: 1,
                  height: 52,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.surface,
                  borderWidth: 1,
                  borderColor: colors.border,
                  borderRadius: 12,
                }}
                onPress={() => router.push("/(tabs)/my-games")}
              >
                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  My Games
                </Text>
              </Pressable>
            </View>

            {isBrowsing && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 10,
                  paddingVertical: 8,
                }}
                style={{ marginBottom: 18 }}
              >
                {sports.map((sport) => {
                  const selected = selectedSport === sport;

                  return (
                    <Pressable
                      key={sport}
                      onPress={() => setSelectedSport(sport)}
                      style={{
                        paddingHorizontal: 16,
                        paddingVertical: 9,
                        borderRadius: 24,
                        borderWidth: 1,
                        borderColor: selected ? colors.primary : colors.border,
                        backgroundColor: selected
                          ? colors.primary
                          : colors.surface,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "600",
                          color: selected ? colors.white : colors.text,
                        }}
                      >
                        {sport}
                      </Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            )}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: colors.text,
                }}
              >
                Upcoming Games
              </Text>

              <Pressable
                onPress={() => {
                  setShowAll(!showAll);
                  if (showAll) {
                    setSelectedSport("All");
                    setSearch("");
                  }
                }}
                accessibilityRole="button"
              >
                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 14,
                    fontWeight: "600",
                  }}
                >
                  {showAll ? "Show Less" : "See All ›"}
                </Text>
              </Pressable>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View
            style={[
              styles.card,
              {
                alignItems: "center",
                paddingVertical: 32,
              },
            ]}
          >
            <Text style={styles.cardTitle}>No games available</Text>
            <Text style={styles.cardSub}>
              Try another sport or search term.
            </Text>
          </View>
        }
      />
    </View>
  );
}
