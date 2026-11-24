import HomeScreen from "@/app/(tabs)/index";
import GameDetails from "@/app/game/[id]";
import { fireEvent, screen } from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";
import { PLACEHOLDER_GAMES } from "@/data/games";

const mockUseGames = jest.fn();
jest.mock("@/hooks/useGames", () => ({ useGames: () => mockUseGames() }));

test("selecting a game opens its details screen", async () => {
  mockUseGames.mockReturnValue({
    data: PLACEHOLDER_GAMES,
    isLoading: false,
    isError: false,
    refetch: jest.fn(),
  });
  await renderRouter(
    {
      "(tabs)/index": HomeScreen,
      "game/[id]": GameDetails,
    },
    {
      initialUrl: "/",
    },
  );

  const gameCard = await screen.findByText("Sunday pickup soccer");
  await fireEvent.press(gameCard);
  expect(await screen.findByText("Description")).toBeOnTheScreen();
  expect(screen.getByText("Join Game")).toBeOnTheScreen();
});
