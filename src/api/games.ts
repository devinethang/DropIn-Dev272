import type { Game } from "@/data/games";
import { getSupabase } from "@/lib/supabase";
import type { Database } from "@/types/database";

export type CreateGameInput = Omit<
  Database["public"]["Tables"]["games"]["Insert"],
  "id"
>;

export async function fetchGames(): Promise<Game[]> {
  const { data, error } = await getSupabase()
    .from("games")
    .select("*, participants(user_id)")
    .order("event_date");
  if (error) throw error;

  return data.map(({ participants, ...game }) => ({
    ...game,
    participant_ids: participants.map(({ user_id }) => user_id),
  }));
}

export async function createGame(game: CreateGameInput): Promise<void> {
  const { error } = await getSupabase().from("games").insert(game);
  if (error) throw error;
}

export async function cancelGame(id: string): Promise<void> {
  const { data, error } = await getSupabase()
    .from("games")
    .delete()
    .eq("id", id)
    .select("id")
    .maybeSingle();
  if (error) throw error;
  if (!data)
    throw new Error("The game was not found or could not be cancelled.");
}
