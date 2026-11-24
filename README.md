# The Drop In App
# Description
Drop In is an app for everyone to get information about local sporting events in their community. It's a place that helps people join in and play sports with their local community members. Users can can create, view, and join local sports events at the press of a button.  

# Drop In - Roles
devinethang (Devin) - Project Manager, UI/UX Designer, and DevOps
alexmorari7 (Alexander Morari) - Backend Developer and Integrator
jordangatewood28 (Jordan) - Frontend Developer, QA Engineer
MM-109 (Mumtaas) - QA Engineer, Frontend developer

# Setup Steps and Variables
pnpm install - Installs all dependencies

.env variables will be listed here when avaliable

Copy ".env.example" to ".env" and set "EXPO_PUBLIC_SUPABASE_URL" and
"EXPO_PUBLIC_SUPABASE_KEY" to Supabase project URL and publishable (or
legacy anon) key. Restart after changing these values.

For a new Supabase project, run "supabase/schema.sql" in the SQL Editor.
For the existing project where the tables and development policies were
already created, run "supabase/add-game-host-trigger.sql" instead; it adds the
host to participants automatically in the same transaction as game creation.
Don't rerun the original seed SQL after adding the trigger: it also inserts
hosts and would create duplicate participant rows. The schema file does not
include seed data.

These policies deliberately allow anonymous users to read, create, and delete
games and participant rows. Use disposable test data only. Before real use,
we will remove all "dev:" policies and replace them with access rules based on
Supabase Auth. The app currently uses the fake "user-1" identity, and Supabase
session persistence is disabled; we will implement real authentication and migrate
the user ID columns before using real accounts. Join remains disabled in the
UI, and development cancellation is not an authorization boundary.

The Create Game form interprets dates and times in the device's local time zone
and stores them as timestamps. The API maps participant rows to the app's
"participant_ids" array. The database types in "src/types/database.ts" are
hand-maintained and must be updated or regenerated when the schema changes
pnpm start - Starts the program


# Branch and PR Rules
Main and development require a pull request before merge with at least 1 approval

# Commit Message Style
Make descriptive commit messages, say what's changed in the new update without going into unnessary details 
For example: 
- `feat: add explore screen`
- `fix: correct event form validation`
- `docs: update software development plan`
- `test: add navigation tests`

### Scripts

| Command | What it does |
| --- | --- |
| `pnpm start` | Start the Expo dev server |
| `pnpm lint` | ESLint (with Prettier) on `src/` |
| `pnpm lint:fix` | ESLint on the whole project, fixing what it can |
| `pnpm format` | Rewrite code and config files with Prettier (Markdown is skipped) |
| `pnpm format:check` | Check formatting without changing files |
| `pnpm exec tsc --noEmit` | Type-check |
| `pnpm test` | Run the Jest tests once (`pnpm test:watch` to keep watching) |

`pnpm install` also installs the Husky pre-commit hook, which runs `lint`, `format:check`, `tsc`, and `test` before every commit.