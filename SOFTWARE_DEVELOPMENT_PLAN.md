
# Software Development Plan

**Project:** Drop In  
**Platform:** React Native with Expo  
**Timeline:** 6 Weeks  
**Team Members:** [devinethang](https://github.com/devinethang), [alexmorari7](https://github.com/alexmorari7), [jordangatewood28](https://github.com/jordangatewood28), [MM-109](https://github.com/MM-109)

---

## 1. Project Overview

This project aims to develop a mobile application that connects people through recreational sports by helping them discover, organize, and participate in local sporting games.

The app will focus on recreational sports participation. Users can discover games in their community, create their own games, view game details, and join activities organized by other users.

Users will be able to browse available games, view upcoming games they have created or joined, and manage their participation. The application will provide a straightforward experience for people who want to connect with others through sports.

### Problem

People may have difficulty finding others to play recreational sports with, especially when they do not have enough players to organize a game.

### Target Users

- **Recreational Player:** A college student who enjoys playing volleyball but struggles to find enough people to organize a game.
- **Community Sports Enthusiast:** Someone who enjoys recreational basketball, soccer, or other sports and wants to discover local games and connect with other players.

### Purpose

To make it easier for people to connect through recreational sports by discovering, organizing, and joining local games.

### Objectives

- Develop a functional mobile application that supports recreational sports participation.
- Allow users to discover, create, and join local sporting games.
- Provide an accessible and straightforward navigation experience.
- Store game information remotely and maintain relevant user preferences locally.
- Validate the application's functionality through testing and quality assurance.
- Demonstrate effective collaboration, version control, and project management.

### Required Features

- Navigation with Expo Router: tabs, a stack, and at least one dynamic route.
- At least four screens.
- At least two forms with validation.
- Remote data storage using Supabase.
- Data fetching and caching through TanStack Query.
- Local persistence using AsyncStorage.
- At least one advanced feature.
- Automated tests and Week 6 quality tooling.

### Core Application Features

1. **Home:** Browse available recreational sports games and access game details.
2. **Create Game:** Organize a recreational sports game by entering the required information.
3. **Game Detail:** View game information, including sport, date, time, location, and description.
4. **Game Participation:** Join or leave available games.
5. **My Games:** View upcoming games created or joined by the user.

---

## 2. MVP Scope

### In Scope

- Home screen displaying available recreational sports games.
- My Games screen for games created or joined by the user.
- Game Detail screen with sport, date, time, location, and description.
- Create Game form with validation.
- Join and leave game functionality.
- Remote game storage and data retrieval.
- Local persistence for selected user preferences.
- Navigation using the approved Expo Router structure.
- Loading states, error handling, accessibility, and testing.
- Consistent UI components based on the approved wireframes.

### Out of Scope

- Sports watch parties and spectator event discovery.
- Live sports scores and match statistics.
- Ticket purchasing and payment processing.
- Real-time messaging and video calls.
- Advanced social networking features.
- Complex tournament management.
- Friend and family invitation functionality.

---

## 3. Week-by-Week Plan

### Week 1: Planning and Setup (Sprint 0)

**Planned Work**

- Define project scope, target users, and application goals.
- Confirm team responsibilities and communication methods.
- Finalize the software development plan.
- Create wireframes and a user-flow diagram.
- Set up the GitHub repository and Project board.
- Configure branches, collaborators, and code-quality tooling.
- Identify required libraries and data structures.

**Deliverables**

| Deliverable | Owner |
|---|---|
| Software Development Plan | `MM-109`, with team feedback |
| Wireframes and user-flow diagram | `alexmorari7`, with UI/UX review by `devinethang` |
| GitHub repository and Project board | Team, coordinated by `devinethang` |

### Week 2: Navigation and Core Screens (Sprint 1)

**Planned Work**

- Implement the Home (Discover) screen and navigation structure.
- Build the My Games screen for games created or joined by the user.
- Create the Game Detail screen using a dynamic Expo Router route.
- Build the Create Game screen structure.
- Establish reusable UI components and consistent styling.
- Test navigation, screen rendering, and interactions.

**Deliverables**

| Deliverable | Owner |
|---|---|
| Functional navigation structure | `jordangatewood28` |
| Home and My Games screens | `jordangatewood28` |
| Game Detail and Create Game screen structures | `jordangatewood28` |
| Wireframe consistency review | `devinethang` |
| Navigation and component testing | `MM-109` |

### Week 3: Game Creation and Remote Data (Sprint 2)

**Planned Work**

- Set up the Supabase database.
- Define game and participation data structures.
- Implement validation and submission functionality for the Create Game form.
- Connect game listings and details to remote data.
- Integrate TanStack Query for fetching and caching.
- Test form validation, loading, and error states.

**Deliverables**

| Deliverable | Owner |
|---|---|
| Supabase schema and API integration | `alexmorari7` |
| Functional Create Game form | `jordangatewood28` |
| Remote game retrieval | `alexmorari7` and `jordangatewood28` |
| Form and data integration tests | `MM-109` |

### Week 4: Game Participation (Sprint 3)

**Planned Work**

- Implement joining and leaving games.
- Make sure games a user joins automatically appear in their My Games screen.
- Connect My Games to participation and game creation records.
- Add local persistence for selected preferences.
- Test game participation and navigation across screens.
- Review progress and adjust scope where necessary.

**Deliverables**

| Deliverable | Owner |
|---|---|
| Game participation functionality | `alexmorari7` |
| My Games integration | `jordangatewood28` |
| Local persistence integration | `alexmorari7` and `jordangatewood28` |
| Integration and regression tests | `MM-109` |
| Sprint review and scope adjustments | `devinethang` |

### Week 5: Integration and Feature Completion (Sprint 4)

**Planned Work**

- Integrate remaining frontend and backend features.
- Complete game creation and participation functionality.
- Implement the selected advanced feature.
- Resolve integration issues.
- Review accessibility and visual consistency.
- Test complete user journeys for discovering, creating, and joining games.

**Deliverables**

| Deliverable | Owner |
|---|---|
| Integrated application | `jordangatewood28` and `alexmorari7` |
| Advanced feature | Assigned during sprint planning |
| UI/UX refinements | `devinethang` and `jordangatewood28` |
| Functional and regression testing | `MM-109` |

### Week 6: Polish and Presentation

**Planned Work**

- Fix outstanding bugs.
- Improve usability and accessibility.
- Verify all required functionality.
- Run linting, formatting, TypeScript checks, and automated tests.
- Complete project documentation.
- Prepare and rehearse the final demonstration.

**Deliverables**

| Deliverable | Owner |
|---|---|
| Functional proof-of-concept application | Team |
| Final testing report | `MM-109` |
| Updated README and documentation | Team |
| Final presentation and demonstration | Team |

---

## 4. Success Criteria

| Success Criterion | Measurement | Primary Owner |
|---|---|---|
| Navigation works correctly | Users can navigate between all required screens without errors | `jordangatewood28` |
| Game discovery works | Users can browse available recreational sports games and open their details | `jordangatewood28` and `alexmorari7` |
| Game creation works | Valid submissions are saved; invalid submissions display errors | `jordangatewood28` and `alexmorari7` |
| Game participation works | Joining or leaving a game updates participation records and My Games | `alexmorari7` |
| Application quality | Automated tests and required quality checks pass | `MM-109` |
| User experience | Screens follow agreed wireframes and provide clear feedback | `devinethang` |

QA testing and UI consistency will take place throughout development rather than only during the final sprint.

---

## 5. Tools & Libraries

| Tool or Library | Purpose |
|---|---|
| React Native / Expo | Mobile application development |
| TypeScript | Type-safe application code |
| Expo Router | Screen navigation, tabs, stack navigation, and dynamic routes |
| Supabase | Remote database and backend services |
| TanStack Query | Remote data fetching, caching, and synchronization |
| AsyncStorage | Local persistence |
| React Hook Form and Zod | Form management and validation |
| Jest and React Native Testing Library | Automated testing |
| ESLint and Prettier | Code quality and formatting |
| Husky | Pre-commit quality checks |
| GitHub Projects | Task management and sprint tracking |
| GitHub Pull Requests | Code review and controlled merging |
| Microsoft Teams | Team communication, meetings, and progress updates |

---

## 6. Data

The following is a proposed initial data model. `alexmorari7` will review and finalize the schema with the team.

| Table or API Resource | Fields | Screens That Use It |
|---|---|---|
| Games | `id`, `title`, `sport`, `description`, `location`, `game_date`, `capacity`, `created_by` | Home (Discover), My Games, Game Detail, Create Game |
| Profiles | `id`, `display_name` | Game Detail, My Games |
| Participants | `id`, `game_id`, `user_id`, `status` | Game Detail, My Games |

---

## 7. Sprint Planning & Team Meetings

**Sprint Duration:** 1 week

**Kickoff Meeting:** Every Wednesday during the team's agreed meeting time.

**Stand-Up Meetings:** At least two progress check-ins each week, using Microsoft Teams.

**Midweek Sync:** Optional working session to address blockers and integration issues.

**Sprint Review and Retrospective:** Review completed features, demonstrate functionality, identify problems, and plan improvements for the next sprint.

### Task Management

All tasks will be tracked through GitHub Projects. Each issue will include a description, acceptance criteria, an assigned owner, and an appropriate label.

The Project board will use the following columns:

1. Backlog
2. Ready
3. In Progress
4. In Review
5. Done

### Definition of Done

A task is considered complete when its acceptance criteria are met, required checks pass, the functionality has been tested, and the pull request has received the required review and has been merged.

### Communication Tools

Microsoft Teams is the team's agreed communication platform for meetings, progress updates, and discussing blockers.

---

## 8. Team Roles

### Project Manager and UI/UX Designer: `devinethang`

**Primary Responsibilities**

- Coordinate project timelines, meetings, and deliverables.
- Maintain the GitHub Project board and sprint planning.
- Create and refine wireframes and user flows.
- Review UI consistency and user experience.
- Help ensure the project remains within scope.

### Frontend Developer: `jordangatewood28`

**Primary Responsibilities**

- Implement screens, navigation, and reusable UI components.
- Develop user-facing forms and interactions.
- Connect frontend components to backend services.
- Address frontend bugs and usability issues.

### Backend Developer: `alexmorari7`

**Primary Responsibilities**

- Design and maintain the Supabase database.
- Implement data retrieval and modification operations.
- Support game participation logic.
- Manage backend integration and data integrity.

### QA / Tester: `MM-109`

**Primary Responsibilities**

- Define test cases and acceptance criteria.
- Test screens, navigation, forms, and user interactions.
- Identify, document, and reproduce bugs.
- Fix assigned issues when appropriate.
- Run automated tests and quality checks.
- Review changes for regressions throughout development.
- Coordinate final regression testing before submission.

Each member will also provide secondary support through code reviews, testing, documentation, or troubleshooting as agreed by the team.

---

## 9. Version Control Workflow

| Item | Policy |
|---|---|
| Main Branch | Stable releases |
| Develop Branch | Ongoing development and the repository's default branch |
| Feature Branches | Separate branches for assigned tasks, created from `develop` |
| Pull Requests | All changes are submitted through pull requests and reviewed by at least one teammate who did not author the changes |
| Branch Protection | Both `main` and `develop` require pull requests and at least one approving review; direct pushes and bypassing are not allowed |
| Merge Policy | Use merge commits to preserve individual commit histories |
| Commit Message Style | Short, descriptive messages identifying the change |

**Commit Message Examples**

- `feat: add home discover screen`
- `fix: correct game form validation`
- `docs: update software development plan`
- `test: add navigation tests`

### Quality Checks

Before merging, the team will verify that the required checks pass:

- ESLint
- Prettier
- TypeScript
- Automated tests

All pull requests require at least one approving review before merging.
