import { colors, styles } from "@/components/universal";
import { Text, View } from "react-native";

export default function Invites() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 55, marginBottom: 20 }}>
        <Text style={styles.title}>Invites</Text>

        <Text
          style={[
            styles.cardSub,
            {
              marginTop: 8,
              fontSize: 15,
            },
          ]}
        >
          Stay connected with your community.
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
          No invites yet
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: colors.muted,
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          Invitations to join games will appear here soon.
        </Text>
      </View>
    </View>
  );
}
