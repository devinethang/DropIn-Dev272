import { fireEvent, render, screen } from "@testing-library/react-native";
import MyGamesScreen from "../app/(tabs)/my-games";
import {
  PLACEHOLDER_GAMES,
  getHostedGames,
  getJoinedGames,
} from "../data/games";

const mockPush = jest.fn();
const mockCancel = jest.fn();
const mockUseGames = jest.fn();

jest.mock("../hooks/useGames", () => ({
  useGames: () => mockUseGames(),
  useCancelGame: () => ({ mutateAsync: mockCancel, isPending: false }),
}));

jest.mock("expo-router", () => ({
  useRouter: () => ({ push: mockPush }),
}));

jest.mock("../hooks/useCurrentUserId", () => ({
  useCurrentUserId: () => "user-1",
}));

beforeEach(() => {
  mockPush.mockClear();
  mockCancel.mockReset().mockResolvedValue(undefined);
  mockUseGames.mockReturnValue({
    data: PLACEHOLDER_GAMES,
    isLoading: false,
    isError: false,
    refetch: jest.fn(),
  });
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

  it("requests cancellation of a hosted game", async () => {
    await render(<MyGamesScreen />);

    await fireEvent.press(screen.getByText("Hosting"));
    await fireEvent.press(screen.getByText("Cancel game"));

    expect(mockCancel).toHaveBeenCalledWith("3");
  });

  it("shows an empty state when the user has no games", async () => {
    mockUseGames.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
      refetch: jest.fn(),
    });
    await render(<MyGamesScreen />);

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
