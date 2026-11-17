// Placeholder game data until Supabase is connected (#20).
// Field names follow the Events and Participants tables in the
// Software Development Plan, so swapping in real data later only
// changes this file, not the screens.

export type Game = {
  id: string;
  title: string;
  sport: string;
  event_date: string; // ISO 8601
  location: string;
  capacity: number;
  created_by: string; // user id of the host
  participant_ids: string[]; // user ids who joined (host included)
};

// Stand in for the signed in user until auth is configured.
export const CURRENT_USER_ID = "user-1";

export const PLACEHOLDER_GAMES: Game[] = [
  {
    id: "1",
    title: "Sunday pickup soccer",
    sport: "Soccer",
    event_date: "2026-11-22T18:00:00",
    location: "Grass Lawn Park",
    capacity: 14,
    created_by: "user-7",
    participant_ids: ["user-7", "user-1", "user-3", "user-4"],
  },
  {
    id: "2",
    title: "Basketball 3v3",
    sport: "Basketball",
    event_date: "2026-11-19T19:30:00",
    location: "Community Center",
    capacity: 6,
    created_by: "user-5",
    participant_ids: ["user-5", "user-1", "user-2"],
  },
  {
    id: "3",
    title: "Morning soccer",
    sport: "Soccer",
    event_date: "2026-11-23T09:00:00",
    location: "Grass Lawn Park",
    capacity: 12,
    created_by: "user-1",
    participant_ids: ["user-1", "user-6", "user-8"],
  },
];

const byDate = (a: Game, b: Game) => a.event_date.localeCompare(b.event_date);

/** Games the user joined but did not create, soonest first. */
export function getJoinedGames(games: Game[], userId: string): Game[] {
  return games
    .filter(
      (g) => g.created_by !== userId && g.participant_ids.includes(userId),
    )
    .sort(byDate);
}

/** Games the user created, soonest first. */
export function getHostedGames(games: Game[], userId: string): Game[] {
  return games.filter((g) => g.created_by === userId).sort(byDate);
}

export function formatGameDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function formatGameTime(iso: string): string {
  return new Date(iso).toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
}
