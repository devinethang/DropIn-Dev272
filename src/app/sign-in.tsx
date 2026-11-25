import { colors, styles } from "@/components/universal";
import { getSupabase } from "@/lib/supabase";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function SignInScreen() {
  const supabase = getSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email.trim() || !password) {
      Alert.alert("Missing Fields", "Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        Alert.alert("Sign In Failed", error.message);
        return;
      }
    } catch {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!email.trim() || !password) {
      Alert.alert("Missing Fields", "Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
      });

      if (error) {
        Alert.alert("Registration Failed", error.message);
        return;
      }

      if (!data.session) {
        Alert.alert(
          "Check Your Email",
          "Please confirm your email address before signing in.",
        );
        return;
      }
    } catch {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.WelcomeContainer}
    >
      <ScrollView
        contentContainerStyle={styles.LoginContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require("../../assets/images/drop-in-logo.png")}
          style={styles.LoginLogo}
          resizeMode="contain"
        />

        <Text style={styles.LoginTitle}>DROP IN</Text>
        <Text style={styles.LoginSubtitle}>Find your game. Join the fun.</Text>

        <View style={styles.LoginCard}>
          <Text style={styles.WelcomeTitle}>Welcome</Text>

          <Text style={styles.LoginLabel}>Email Address</Text>
          <TextInput
            style={styles.LoginInput}
            placeholder="name@example.com"
            placeholderTextColor={colors.muted}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.LoginLabel}>Password</Text>
          <TextInput
            style={styles.LoginInput}
            placeholder="Enter your password"
            placeholderTextColor={colors.muted}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Pressable
            style={styles.LoginButton}
            onPress={handleSignIn}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </Pressable>

          <Pressable
            style={styles.RegisterButton}
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.RegisterButtonText}>Register</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
