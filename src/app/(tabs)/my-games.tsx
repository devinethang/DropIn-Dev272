import { colors, styles } from "@/components/universal";
import { Text, View } from "react-native";

export default function MyGames() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 55, marginBottom: 20 }}>
        <Text style={styles.title}>My Games</Text>

        <Text
          style={[
            styles.cardSub,
            {
              marginTop: 8,
              fontSize: 15,
            },
          ]}
        >
          Keep track of the games you join and host.
        </Text>
      </View>

      <View
        style={[
          styles.card,
          {
            alignItems: "center",
            paddingVertical: 40,
            paddingHorizontal: 24,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: colors.text,
            marginBottom: 8,
          }}
        >
          My Games is coming soon
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: colors.muted,
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          Your joined and hosted games will appear here.
        </Text>
      </View>
    </View>
  );
}
