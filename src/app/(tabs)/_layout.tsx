import { colors } from "@/components/universal";
import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Image
              source={require("../../../assets/images/home.png")}
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: () => (
            <Image
              source={require("../../../assets/images/explore.png")}
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="my-games"
        options={{
          title: "My Games",
          tabBarIcon: () => (
            <Image
              source={require("../../../assets/images/game.png")}
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="invites"
        options={{
          title: "Invites",
          tabBarIcon: () => (
            <Image
              source={require("../../../assets/images/invite.png")}
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
