import { Pressable, Text, View } from "react-native";
import { styles } from "./universal";

type Props = {
  isLoading: boolean;
  isError: boolean;
  retry: () => void;
};

export function GameQueryState({ isLoading, isError, retry }: Props) {
  if (isLoading) return <Text style={styles.cardSub}>Loading games...</Text>;
  if (!isError) return null;

  return (
    <View style={styles.card} accessibilityRole="alert">
      <Text style={styles.cardTitle}>Unable to load games</Text>
      <Text style={styles.cardSub}>
        Check your connection and Supabase configuration, then try again.
      </Text>
      <Pressable onPress={retry} accessibilityRole="button">
        <Text>Try again</Text>
      </Pressable>
    </View>
  );
}
