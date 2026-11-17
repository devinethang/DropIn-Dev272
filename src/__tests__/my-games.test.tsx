import { fireEvent, render, screen } from "@testing-library/react-native";
import MyGamesScreen from "../app/(tabs)/my-games";
import {
  PLACEHOLDER_GAMES,
  getHostedGames,
  getJoinedGames,
} from "../data/games";

const mockPush = jest.fn();

jest.mock("expo-router", () => ({
  useRouter: () => ({ push: mockPush }),
}));

beforeEach(() => {
  mockPush.mockClear();
});

// React Native Testing Library v14: render and fireEvent are async, so await them.
describe("My Games screen", () => {
  it("shows joined games by default", async () => {
    await render(<MyGamesScreen />);

    expect(screen.getByText("My Games")).toBeTruthy();
    expect(screen.getByText("Sunday pickup soccer")).toBeTruthy();
    expect(screen.getByText("Basketball 3v3")).toBeTruthy();
    expect(screen.queryByText("Morning soccer")).toBeNull();
  });

  it("shows hosted games with a cancel button on the Hosting tab", async () => {
    await render(<MyGamesScreen />);

    await fireEvent.press(screen.getByText("Hosting"));

    expect(screen.getByText("Morning soccer")).toBeTruthy();
    expect(screen.getByText("Cancel game")).toBeTruthy();
    expect(screen.queryByText("Sunday pickup soccer")).toBeNull();
  });

  it("opens the game detail screen when a game is selected", async () => {
    await render(<MyGamesScreen />);

    await fireEvent.press(screen.getByText("Sunday pickup soccer"));

    expect(mockPush).toHaveBeenCalledWith({
      pathname: "/game/[id]",
      params: { id: "1" },
    });
  });

  it("removes a hosted game when it is cancelled", async () => {
    await render(<MyGamesScreen />);

    await fireEvent.press(screen.getByText("Hosting"));
    await fireEvent.press(screen.getByText("Cancel game"));

    expect(screen.queryByText("Morning soccer")).toBeNull();
    expect(screen.getByText("You aren't hosting any games yet.")).toBeTruthy();
  });

  it("shows an empty state when the user has no games", async () => {
    await render(<MyGamesScreen initialGames={[]} />);

    expect(screen.getByText("No upcoming games")).toBeTruthy();
    expect(screen.getByText("You haven't joined any games yet.")).toBeTruthy();
  });
});

describe("game data helpers", () => {
  it("separates joined and hosted games for a user", () => {
    expect(
      getJoinedGames(PLACEHOLDER_GAMES, "user-1").map((g) => g.id),
    ).toEqual(["2", "1"]);
    expect(
      getHostedGames(PLACEHOLDER_GAMES, "user-1").map((g) => g.id),
    ).toEqual(["3"]);
  });
});
