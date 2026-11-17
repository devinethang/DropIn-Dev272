<<<<<<< HEAD
import { Stack, Tabs } from "expo-router";
=======
import { colors } from "@/components/universal";
import { Tabs } from "expo-router";
import { Image } from "react-native";
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
<<<<<<< HEAD
=======
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
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
<<<<<<< HEAD
          title: "Discover",
        }}
      />
=======
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

>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
      <Tabs.Screen
        name="my-games"
        options={{
          title: "My Games",
<<<<<<< HEAD
=======
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
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
        }}
      />
    </Tabs>
  );
}
