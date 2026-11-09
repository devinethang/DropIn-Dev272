# The Drop In App
# Description
Drop In is an app for everyone to get information about local sporting events in their community. It's a place that helps people join in and play sports with their local community members, regardless of their skill level. Users can can create, view, and join local sports events at the press of a button.  

# Drop In - Roles
devinethang (Devin) - Project Manager, UI/UX Designer, and DevOps
Alexander Morari - Backend Developer and Integrator
jordangatewood28 (Jordan) - Frontend Developer
MM-109 (Mumtaas) - QA Engineer

# Setup Steps and Variables
pnpm install - Installs all dependencies

.env variables will be listed here when avaliable

pnpm start - Starts the program


# Branch and PR Rules
Main and development require a pull request before merge with at least 1 approval

# Commit Message Style
Make descriptive commit messages, say what's changed in the new update without going into unnessary details 
For example: Added new login page, fixed header styling issues for home page, switched storage system to Supabase 

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