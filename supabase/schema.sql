-- contains instructions to create the tables from scratch. don’t need to run it because the tables already exist. 
-- Development policies allow anyone with the public keyto read, create and delete games and participants. Rfor real use we will need stricter policies
create table public.games (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  sport text not null,
  description text,
  event_date timestamptz not null,
  location text not null,
  capacity integer not null check (capacity > 0),
  created_by text not null
);

create table public.participants (
  game_id uuid not null references public.games(id) on delete cascade,
  user_id text not null,
  primary key (game_id, user_id)
);

grant select, insert, update, delete on public.games, public.participants to anon, authenticated;

alter table public.games enable row level security;
alter table public.participants enable row level security;

create policy "dev: read games" on public.games for select to anon, authenticated using (true);
create policy "dev: create games" on public.games for insert to anon, authenticated with check (true);
create policy "dev: cancel games" on public.games for delete to anon, authenticated using (true);
create policy "dev: read participants" on public.participants for select to anon, authenticated using (true);
create policy "dev: join games" on public.participants for insert to anon, authenticated with check (true);
create policy "dev: leave games" on public.participants for delete to anon, authenticated using (true);

create function public.add_game_host() returns trigger
language plpgsql
set search_path = ''
as $$
begin
  insert into public.participants (game_id, user_id)
  values (new.id, new.created_by);
  return new;
end;
$$;

create trigger add_game_host
after insert on public.games
for each row execute function public.add_game_host();
