import { render, screen } from "@testing-library/react-native";

import Index from "@/app/(tabs)/index";
import { PLACEHOLDER_GAMES } from "@/data/games";

const mockUseGames = jest.fn();
jest.mock("@/hooks/useGames", () => ({ useGames: () => mockUseGames() }));

beforeEach(() => {
  mockUseGames.mockReturnValue({
    data: PLACEHOLDER_GAMES,
    isLoading: false,
    isError: false,
    refetch: jest.fn(),
  });
});

test("home screen displays Drop In", async () => {
  await render(<Index />);

  expect(screen.getByText("DROP IN")).toBeOnTheScreen();
  expect(screen.getByText("Find your game. Join the fun.")).toBeOnTheScreen();
  expect(screen.getByText("Upcoming Games")).toBeOnTheScreen();
  expect(screen.getByText("New Game")).toBeOnTheScreen();
  expect(screen.getByText("My Games")).toBeOnTheScreen();
});

test("home shows loading and failure states instead of an empty list", async () => {
  mockUseGames.mockReturnValue({
    data: undefined,
    isLoading: true,
    isError: false,
    refetch: jest.fn(),
  });
  const { rerender } = await render(<Index />);
  expect(screen.getByText("Loading games...")).toBeOnTheScreen();

  mockUseGames.mockReturnValue({
    data: undefined,
    isLoading: false,
    isError: true,
    refetch: jest.fn(),
  });
  await rerender(<Index />);
  expect(screen.getByText("Unable to load games")).toBeOnTheScreen();
});
