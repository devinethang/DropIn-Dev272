import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { cancelGame, createGame, fetchGames } from "@/api/games";

const gamesKey = ["games"] as const;

export function useGames() {
  return useQuery({ queryKey: gamesKey, queryFn: fetchGames });
}

export function useCreateGame() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createGame,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: gamesKey }),
  });
}

export function useCancelGame() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cancelGame,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: gamesKey }),
  });
}
