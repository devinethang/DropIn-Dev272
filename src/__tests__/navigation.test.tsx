import HomeScreen from "@/app/(tabs)/index";
import GameDetails from "@/app/game/[id]";
import { fireEvent, screen } from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";

test("selecting a game opens its details screen", async () => {
  await renderRouter(
    {
      "(tabs)/index": HomeScreen,
      "game/[id]": GameDetails,
    },
    {
      initialUrl: "/",
    },
  );

  const gameCard = await screen.findByText("Community Baseball Game");
  fireEvent.press(gameCard);
  expect(await screen.findByText("Description")).toBeOnTheScreen();
  expect(screen.getByText("Join Game")).toBeOnTheScreen();
});
