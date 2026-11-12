import { Tabs } from "expo-router";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: "Discover"
        }}
      />
      <Tabs.Screen 
        name="my-games"
        options={{
          title: "My Games"
        }}
      />
    </Tabs>
  );
}
