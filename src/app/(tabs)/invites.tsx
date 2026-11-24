import { colors, styles } from "@/components/universal";
import { getSupabase } from "@/lib/supabase";
import { useRouter } from 'expo-router';
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";



export default function Invites() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSendInvite = async (async: any) => {
    const trimmedEmail = email.trim().toLowerCase()

    if (!trimmedEmail || !trimmedEmail.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const { data: { user }, error: userError } = await getSupabase().auth.getUser();
      if (userError || !user) throw new Error('You must be logged in to send invites.');

      const { data, error: insertError } = await (getSupabase() as any)
        .from('invitations')
        .insert({
          email: trimmedEmail,
          invited_by: user.id,
        })
        .select()
        .single();

      if (insertError) throw insertError;

      Alert.alert('Success', `Invitation sent to ${trimmedEmail}`);
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
          onChangeText={setEmail}
          value={email}
          placeholder='Placholder for games drop-down list' // I had a build for it, but bricked it trying to get it done, so I had to reclone.
        />

        <Text>Player</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
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
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

