import { colors, styles } from "@/components/universal";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { DATA, gameList } from "./index";

const sports = [
  "All",
  "Soccer",
  "Basketball",
  "Football",
  "Baseball",
  "Lacrosse",
];

export default function Explore() {
  const router = useRouter();
  const [selectedSport, setSelectedSport] = useState("All");
  const [search, setSearch] = useState("");

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
        data={filteredGames}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 24,
        }}
        ListHeaderComponent={
          <View>
            <View style={{ marginTop: 55, marginBottom: 22 }}>
              <Text style={styles.title}>Explore Games</Text>

              <Text
                style={[
                  styles.cardSub,
                  {
                    marginTop: 8,
                    fontSize: 15,
                  },
                ]}
              >
                Find a game happening in your community.
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

            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: colors.text,
                marginBottom: 12,
              }}
            >
              Available Games
            </Text>
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
