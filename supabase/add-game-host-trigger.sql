-- Run once on projects where the tables already exist.
create or replace function public.add_game_host() returns trigger
language plpgsql
set search_path = ''
as $$
begin
  insert into public.participants (game_id, user_id)
  values (new.id, new.created_by);
  return new;
end;
$$;

drop trigger if exists add_game_host on public.games;
create trigger add_game_host
after insert on public.games
for each row execute function public.add_game_host();
