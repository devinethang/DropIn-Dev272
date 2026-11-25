import { getSupabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export function useCurrentUserId(): string | null {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const supabase = getSupabase();

    supabase.auth
      .getUser()
      .then(({ data }) => setUserId(data.user?.id ?? null));

    // Adds a listener that notifies every time an auth event happens
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session?.user.id ?? null);
    });

    // Removes listener, so no wasted memory
    return () => subscription.unsubscribe();
  }, []);

  return userId;
}
