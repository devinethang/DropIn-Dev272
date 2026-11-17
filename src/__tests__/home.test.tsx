import { render, screen } from "@testing-library/react-native";

import Index from "@/app/(tabs)/index";

test("home screen displays Drop In", async () => {
  await render(<Index />);

  expect(screen.getByText("DROP IN")).toBeOnTheScreen();
  expect(screen.getByText("Find your game. Join the fun.")).toBeOnTheScreen();
  expect(screen.getByText("Upcoming Games")).toBeOnTheScreen();
  expect(screen.getByText("New Game")).toBeOnTheScreen();
  expect(screen.getByText("My Games")).toBeOnTheScreen();
});
