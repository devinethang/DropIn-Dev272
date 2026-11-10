import { Stack } from "expo-router";

// Root layout. Every screen file inside src/app/ is a route.
// Week 3 replaces this with Stack + Tabs layouts.
export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Create" options={{ title: "Create" }} />
      <Stack.Screen name="Sign-In" options={{ title: "Sign In" }} />
    </Stack>
  );
}