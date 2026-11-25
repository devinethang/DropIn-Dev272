import { colors, styles } from "@/components/universal";
import { getSupabase } from "@/lib/supabase";
import { useRouter } from 'expo-router';
import { useState } from "react";
import { Alert, Keyboard, Pressable, Text, TextInput, View } from "react-native";



export default function Invites() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [game, setGame] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendInvite = async (async: any) => {
    const isValidEmail = (email: string): boolean => {
      const trimmed = email.trim();
      const parts = trimmed.split('@');
      
      if (parts.length !== 2) return false;
      
      const [local, domain] = parts;
      if (!local || !domain) return false;
      
      const domainParts = domain.split('.');
      if (domainParts.length < 2) return false;
      if (domainParts.some((part) => part.length === 0)) return false;

      return true;
};

    if (!isValidEmail) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      const { data: { user }, error: userError } = await getSupabase().auth.getUser();
      if (userError || !user) throw new Error('You must be logged in to send invites.');
      if (!game.trim()) throw new Error('You must have a game selected to send invites.');

      const { data, error: insertError } = await (getSupabase() as any)
        .from('invitations')
        .insert({
          email: isValidEmail,
          invited_by: user.id,
          game: game.trim()
        })
        .select()
        .single();

      if (insertError) throw insertError;

      Alert.alert('Success', `Invitation sent to ${isValidEmail}`);
      setEmail('');
      router.back();
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to send invitation.');
    } finally {
      setLoading(false);
    }
  }
  

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
          onChangeText={setGame}
          value={game}
          placeholder='Placholder for games drop-down list' // I had a build for it, but bricked it trying to get it done, so I had to reclone.
          onPress={Keyboard.dismiss}
        />

        <Text>Player</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='Player Name or Email'
          onPress={Keyboard.dismiss}
        />
        <Pressable
          onPress={() => {
            Keyboard.dismiss;
            handleSendInvite;
          }}
          style={styles.button} //Placeholder, we can polish this later.
        >
          <Text style={{ fontSize: 16 }}>Send Invite</Text>
        </Pressable>
      </View>
    </View>
  );
}

