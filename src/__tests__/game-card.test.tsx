import { fireEvent, render, screen } from "@testing-library/react-native";
import { GameCard, getCountLabel } from "../components/GameCard";
import type { Game } from "../data/games";

const game: Game = {
  id: "9",
  title: "Evening volleyball",
  sport: "Volleyball",
  event_date: "2026-11-21T18:00:00",
  location: "School gym",
  capacity: 4,
  created_by: "user-2",
  participant_ids: ["user-2", "user-3"],
};

describe("getCountLabel", () => {
  it("shows a fraction by default", () => {
    expect(getCountLabel(game)).toBe("2 / 4");
  });

  it("shows spots left, singular and plural", () => {
    expect(getCountLabel(game, "spotsLeft")).toBe("2 spots left");
    expect(
      getCountLabel({ ...game, participant_ids: ["a", "b", "c"] }, "spotsLeft"),
    ).toBe("1 spot left");
  });

  it("shows Full when capacity is reached", () => {
    expect(
      getCountLabel(
        { ...game, participant_ids: ["a", "b", "c", "d"] },
        "spotsLeft",
      ),
    ).toBe("Full");
  });
});

// React Native Testing Library v14: render and fireEvent are async.
describe("GameCard", () => {
  it("renders the spots-left style for the Home screen", async () => {
    await render(
      <GameCard game={game} onPress={() => {}} countStyle="spotsLeft" />,
    );

    expect(screen.getByText("Evening volleyball")).toBeTruthy();
    expect(screen.getByText("2 spots left")).toBeTruthy();
    expect(screen.queryByText("Cancel game")).toBeNull();
  });

  it("calls onPress when tapped", async () => {
    const onPress = jest.fn();
    await render(<GameCard game={game} onPress={onPress} />);

    await fireEvent.press(screen.getByText("Evening volleyball"));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
