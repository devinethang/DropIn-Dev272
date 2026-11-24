import { colors, styles } from "@/components/universal";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Invites() {
  const [text, onChangeText] = useState('');
  

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

      <Text
        style={[
          styles.cardSub,
          {
            marginTop: 8,
            fontSize: 15,
          },
        ]}>
          Invite a Player
      </Text>

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

      
      <Text
        style={[
          styles.cardSub,
          {
            marginTop: 8,
            fontSize: 15,
          },
        ]}>
          Invite a Player
      </Text>
      <View
        style={styles.card}
      >
        <Text>Game</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Placholder for games drop down' // I had a build for it, but bricked it trying to get it done, so I had to reclone.
        />

        <Text>Player</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Player Name or Email'
        />
        <Pressable
          style={styles.button} //Placeholder, we can polish this later.
        >
          <Text style={{ fontSize: 16 }}>Send Invite</Text>
        </Pressable>
      </View>
    </View>
  );
}
