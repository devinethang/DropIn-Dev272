import { colors, styles } from "@/components/universal";
import { parseGameDate } from "@/data/gameDate";
import { useCreateGame } from "@/hooks/useGames";
import { errorMessage } from "@/lib/errorMessage";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCurrentUserId } from "../hooks/useCurrentUserId";

const sports = [
  "Soccer",
  "Basketball",
  "Football",
  "Baseball",
  "Lacrosse",
  "Volleyball",
];

export default function CreateGame() {
  const router = useRouter();
  const createGame = useCreateGame();
  const userId = useCurrentUserId();

  const [title, setTitle] = useState("");
  const [sport, setSport] = useState("");
  const [showSports, setShowSports] = useState(false);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [maxPlayers, setMaxPlayers] = useState(10);
  const [notes, setNotes] = useState("");

  const handlePostGame = async () => {
    const missingFields: string[] = [];

    if (!title.trim()) missingFields.push("title");
    if (!sport.trim()) missingFields.push("sport");
    if (!location.trim()) missingFields.push("location");
    if (!date.trim()) missingFields.push("date");
    if (!time.trim()) missingFields.push("start time");

    if (missingFields.length > 0) {
      const fieldList =
        missingFields.length === 1
          ? missingFields[0]
          : missingFields.length === 2
            ? missingFields.join(" and ")
            : `${missingFields.slice(0, -1).join(", ")}, and ${missingFields[missingFields.length - 1]}`;

      Alert.alert(
        "Missing information",
        `Please complete the ${fieldList} ${missingFields.length === 1 ? "field" : "fields"}.`,
      );

      return;
    }

    const eventDate = parseGameDate(date, time);
    if (!eventDate) {
      Alert.alert(
        "Invalid date or time",
        "Enter a valid date (MM/DD/YYYY) and time (for example 5:00 PM).",
      );
      return;
    }

    try {
      if (!userId) {
        Alert.alert("Not signed in", "Please sign in to host a game.");
        return;
      }

      await createGame.mutateAsync({
        title: title.trim(),
        sport,
        location: location.trim(),
        event_date: eventDate,
        capacity: maxPlayers,
        description: notes.trim() || null,
        created_by: userId,
      });
      Alert.alert("Game posted", "Your game is now available.", [
        { text: "OK", onPress: () => router.replace("/") },
      ]);
    } catch (error) {
      Alert.alert("Unable to post game", errorMessage(error));
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.bg }}
      edges={["top"]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.form, { paddingBottom: 36 }]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <Text style={[styles.title, { flex: 1 }]}>New Game</Text>

            <Pressable
              onPress={() => router.back()}
              accessibilityRole="button"
              accessibilityLabel="Close new game"
            >
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Cancel
              </Text>
            </Pressable>
          </View>

          <Text
            style={[
              styles.cardSub,
              {
                fontSize: 15,
                marginBottom: 8,
              },
            ]}
          >
            Bring your community together. Host a game!
          </Text>

          <View style={{ gap: 8 }}>
            <Text style={styles.label}>Game Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Name your game"
              placeholderTextColor={colors.muted}
              value={title}
              onChangeText={setTitle}
              accessibilityLabel="Game title"
            />
          </View>

          <View style={{ gap: 8 }}>
            <Text style={styles.label}>Sport</Text>

            <Pressable
              onPress={() => setShowSports(!showSports)}
              style={[
                styles.input,
                {
                  justifyContent: "center",
                },
              ]}
              accessibilityRole="button"
              accessibilityLabel="Select a sport"
            >
              <Text
                style={{
                  fontSize: 16,
                  color: sport ? colors.text : colors.muted,
                }}
              >
                {sport || "Select a sport"}
              </Text>
            </Pressable>

            {showSports && (
              <View style={styles.card}>
                {sports.map((item) => (
                  <Pressable
                    key={item}
                    onPress={() => {
                      setSport(item);
                      setShowSports(false);
                    }}
                    style={{
                      paddingVertical: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: colors.text,
                      }}
                    >
                      {item}
                    </Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>

          <View style={{ gap: 8 }}>
            <Text style={styles.label}>Location</Text>

            <TextInput
              style={styles.input}
              placeholder="Where are you playing?"
              placeholderTextColor={colors.muted}
              value={location}
              onChangeText={setLocation}
              autoCapitalize="words"
              accessibilityLabel="Game location"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 12,
            }}
          >
            <View style={{ flex: 1, gap: 8 }}>
              <Text style={styles.label}>Date</Text>

              <TextInput
                style={styles.input}
                placeholder="MM/DD/YYYY"
                placeholderTextColor={colors.muted}
                value={date}
                onChangeText={setDate}
                keyboardType="numbers-and-punctuation"
                accessibilityLabel="Game date"
              />
            </View>

            <View style={{ flex: 1, gap: 8 }}>
              <Text style={styles.label}>Start Time</Text>

              <TextInput
                style={styles.input}
                placeholder="e.g. 5:00 PM"
                placeholderTextColor={colors.muted}
                value={time}
                onChangeText={setTime}
                accessibilityLabel="Game start time"
              />
            </View>
          </View>

          <View style={{ gap: 8 }}>
            <Text style={styles.label}>Maximum Players</Text>

            <View
              style={[
                styles.input,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              ]}
            >
              <Pressable
                onPress={() =>
                  setMaxPlayers((current) => Math.max(2, current - 1))
                }
                accessibilityRole="button"
                accessibilityLabel="Decrease maximum players"
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 26,
                    color: colors.primary,
                    fontWeight: "600",
                  }}
                >
                  −
                </Text>
              </Pressable>

              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  color: colors.text,
                }}
              >
                {maxPlayers} players
              </Text>

              <Pressable
                onPress={() =>
                  setMaxPlayers((current) => Math.min(100, current + 1))
                }
                accessibilityRole="button"
                accessibilityLabel="Increase maximum players"
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 26,
                    color: colors.primary,
                    fontWeight: "600",
                  }}
                >
                  +
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={{ gap: 8 }}>
            <Text style={styles.label}>Notes (optional)</Text>

            <TextInput
              style={[
                styles.input,
                {
                  minHeight: 110,
                  textAlignVertical: "top",
                },
              ]}
              placeholder="Anything players should know?"
              placeholderTextColor={colors.muted}
              value={notes}
              onChangeText={setNotes}
              multiline
              accessibilityLabel="Game notes"
            />
          </View>

          <Pressable
            style={[
              styles.LoginButton,
              {
                marginTop: 12,
              },
            ]}
            onPress={() => void handlePostGame()}
            accessibilityRole="button"
            accessibilityState={{ disabled: createGame.isPending }}
            disabled={createGame.isPending}
          >
            <Text style={styles.buttonText}>
              {createGame.isPending ? "Posting..." : "Post Game"}
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
