
# Software Development Plan

**Project:** Drop In  
**Platform:** React Native with Expo  
**Timeline:** 6 Weeks  
**Team Members:** [devinethang](https://github.com/devinethang), [alexmorari7](https://github.com/alexmorari7), [jordangatewood28](https://github.com/jordangatewood28), [MM-109](https://github.com/MM-109)

---

## 1. Project Overview

This project aims to develop a mobile application that connects people through sports by helping them discover, organize, and participate in local recreational sports games.

Users will be able to explore available games, view game details, create games, and join or leave activities. The app will also support user profile functionality, email invitations for friends and family, and real-time in-app messaging between players.

### Problem

People may have difficulty finding others to play recreational sports or organizing games with enough participants.

### Target Users

- **Recreational Player:** A college student who enjoys playing volleyball but struggles to find enough people to organize a game.
- **Game Organizer:** Someone who wants to organize recreational sports games and invite friends, family, or other players to participate.

### Purpose

To make it easier for people to connect through recreational sports by discovering, organizing, and participating in local games.

### Objectives

- Develop a functional mobile application for recreational sports.
- Allow users to discover, create, join, and leave games.
- Provide an accessible and straightforward navigation experience.
- Allow users to personalize and manage their accounts.
- Support email invitations and real-time communication between players.
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

1. **Explore Games:** Browse available recreational sports games and search for activities.
2. **Create Game:** Organize recreational sports games with relevant details.
3. **Game Participation:** View game information and join or leave games.
4. **Sign In:** Allow users to authenticate and access their accounts.
5. **Email Invitations:** Invite friends and family to participate in games using email addresses.
6. **My Games:** View games created or joined by the user.
7. **Real-Time Messaging:** Allow players to communicate through in-app messages.
8. **User Profile:** Allow users to view their account information, upload and update profile photos, sign out, and delete their accounts.

---

## 2. MVP Scope

### In Scope

- Home screen with search, upcoming games, and navigation to Explore and Invites.
- Game discovery for recreational sports.
- Game details including sport, date, time, location, and description.
- Create Game form with validation.
- User authentication.
- Join and Leave Game functionality.
- My Games screen.
- Email invitations for friends and family.
- Real-time in-app messaging.
- User profile with profile photo upload, Sign Out, and Delete Account functionality.
- Remote game storage and data retrieval.
- Local persistence for selected user preferences.
- Navigation, loading states, error handling, and testing.

### Out of Scope

- Sports watch parties.
- Live sports scores and match statistics.
- Ticket purchasing and payment processing.
- Video calls.
- Advanced social networking features beyond planned messaging and invitations.
- Complex tournament management.

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
- Review planning deliverables and verify that initial acceptance criteria are defined.

**Deliverables**

| Deliverable | Owner |
|---|---|
| Software Development Plan | `MM-109` |
| Wireframes and user-flow diagram | `alexmorari7`, with team feedback |
| GitHub repository and Project board | Team, coordinated by `devinethang` |
| Initial testing requirements and acceptance criteria | `MM-109` |
| Sprint 0 QA and planning review | `MM-109` |

### Week 2: Navigation and Core Screens (Sprint 1)

**Planned Work**

- Implement the Home screen and navigation structure.
- Build the Explore screen with game discovery and search.
- Create the Game Details screen.
- Add the My Games and Invites screen structures.
- Create the Create Game screen structure.
- Establish reusable UI components and consistent styling.
- Test navigation, screen rendering, form validation, and interactions.
- Document bugs and verify fixes.

**Deliverables**

| Deliverable | Owner |
|---|---|
| Functional Expo Router navigation structure | `MM-109`, `jordangatewood28` |
| Home (Discover) and Explore screens | `MM-109`, `jordangatewood28` |
| Game Details and Create Game screen structures | `MM-109` |
| My Games screen structure | `alexmorari7` |
| Invites screen structure | `MM-109` |
| Reusable UI components and consistent styling | `MM-109` |
| Reusable UI components and consistent styling | `jordangatewood28` |
| Responsive layouts and accessibility for core screens | `devinethang`, `jordangatewood28` |
| Wireframe consistency review | `devinethang`, `alexmorari7` |
| Sprint 1 QA: Navigation and core screen functionality | `MM-109`, `devinethang` |

### Week 3: Authentication and Game Management (Sprint 2)

**Planned Work**

- Configure Supabase integration and define game data structures.
- Implement functional user sign-in and authentication.
- Connect Create Game to Supabase for saving newly created games.
- Implement remote game retrieval using TanStack Query.
- Implement Join and Leave Game functionality.
- Update participation records and display participation status.
- Establish the initial data files and supporting structure for real-time messaging.
- Establish the initial data files and supporting structure for email invitations.
- Test authentication, game creation, participation, and remote data integration.
- Document bugs and verify fixes.

**Deliverables**

| Deliverable | Owner |
|---|---|
| Supabase event data integration | `alexmorari7` |
| User sign-in and authentication | `MM-109` |
| Create Game and Supabase integration | `alexmorari7` |
| Join and Leave Game functionality | `devinethang` |
| Initial real-time messaging structure | `devinethang` |
| Initial email invitation structure | `jordangatewood28` |
| Sprint 2 QA: Authentication and game management functionality | `MM-109`, `jordangatewood28` |

**Sprint Goal**

Implement functional authentication, remote game creation and retrieval, and game participation while preparing the supporting structures for future messaging and email invitations.

**Due Date:** November 24, 2026

### Week 4: User Profile and Communication (Sprint 3)

**Planned Work**

- Create a user profile screen and integrate it into the app navigation.
- Display authenticated user account information.
- Implement profile photo upload and updates using Supabase Storage.
- Implement Sign Out and Delete Account functionality.
- Build upon the messaging structure established during Sprint 2.
- Implement real-time in-app messaging using Supabase.
- Develop the messaging interface and connect it to backend data.
- Build upon the email invitation structure established during Sprint 2.
- Implement email invitations for friends and family.
- Associate invitations with selected games and include game details in invitation emails.
- Handle loading, validation, success, and error states where applicable.
- Test user profile, real-time messaging, and email invitation functionality.
- Perform regression testing and verify code quality checks.
- Document bugs and verify fixes.

**Deliverables**

| Deliverable | Owner |
|---|---|
| User profile and account management | `MM-109` |
| Real-time in-app messaging | `jordangatewood28`, `alexmorari7` |
| Email invitation functionality | `alexmorari7`, `devinethang` |
| Sprint 3 QA: User profile and communication functionality | `MM-109`, `jordangatewood28` |
| Sprint review and scope adjustments | `devinethang` |

**Sprint Goal**

Implement a functional user profile with profile photo, Sign Out, and Delete Account features while expanding the real-time messaging and email invitation structures established during Sprint 2.

**Due Date:** December 01, 2026

**Holiday Alert**

Sprint 3 falls during Thanksgiving week. The team acknowledges that members may have limited availability due to holiday commitments. 

### Week 5: Integration and Feature Completion (Sprint 4)

**Planned Work**

- Integrate remaining frontend and backend features.
- Complete unfinished messaging and invitation functionality.
- Complete the selected advanced feature.
- Resolve integration issues.
- Review accessibility and visual consistency.
- Test complete user journeys, including authentication, game creation, participation, messaging, and invitations.
- Conduct regression testing to ensure existing features continue working after integration.
- Document bugs and verify fixes.

**Deliverables**

| Deliverable | Owner |
|---|---|
| Integrated application | Team |
| Remaining feature completion | Assigned during sprint planning |
| Advanced feature | Assigned during sprint planning |
| UI/UX refinements | `devinethang`, `alexmorari7`, `jordangatewood28`, `MM-109` |
| Sprint 4 QA: Integrated application and regression testing | `MM-109`, `jordangatewood28` |

### Week 6: Polish and Presentation

**Planned Work**

- Fix outstanding bugs.
- Improve usability and accessibility.
- Verify all required functionality.
- Run linting, formatting, TypeScript checks, and automated tests.
- Complete final regression testing.
- Complete project documentation.
- Prepare and rehearse the final demonstration.

**Deliverables**

| Deliverable | Owner |
|---|---|
| Functional proof-of-concept application | Team |
| Final QA: Application testing and quality checks | `MM-109`, `jordangatewood28` |
| Final testing report | `MM-109`, `jordangatewood28` |
| Updated README and documentation | Team |
| Final presentation and demonstration | Team |

---

## 4. Success Criteria

| Success Criterion | Measurement | Primary Owner |
|---|---|---|
| Navigation works correctly | Users can navigate between all required screens without errors | `MM-109`, `jordangatewood28` |
| User authentication works | Users can sign in and maintain authenticated sessions | `MM-109` |
| Game creation works | Valid submissions are saved to Supabase; invalid submissions display errors | `alexmorari7` |
| Game data integration works | Games are retrieved from Supabase and displayed correctly | `alexmorari7` |
| Game participation works | Joining or leaving a game updates participation records | `devinethang` |
| User profile works | Users can view their account information, upload and update profile photos, sign out, and delete their accounts | `MM-109` |
| Email invitations work | Users can invite friends and family through email with the correct game information | `alexmorari7`, `devinethang` |
| Real-time messaging works | Players can send and receive messages with updates appearing in real time | `jordangatewood28`, `alexmorari7` |
| Application quality | Automated tests and required quality checks pass | `MM-109`, `jordangatewood28` |
| Sprint QA coverage | Each sprint includes a dedicated QA issue, documented results, and verification of completed functionality | `MM-109`, `jordangatewood28` |
| User experience | Screens follow agreed wireframes and provide clear feedback | `devinethang`, `alexmorari7` |

QA testing and UI consistency will take place throughout development rather than only during the final sprint. Each sprint will include a dedicated QA issue to verify completed features, document bugs, and retest fixes. Features that remain incomplete will be documented and carried forward rather than marked as successfully tested.

---

## 5. Tools & Libraries

| Tool or Library | Purpose |
|---|---|
| React Native / Expo | Mobile application development |
| TypeScript | Type-safe application code |
| Expo Router | Screen navigation, tabs, stack navigation, and dynamic routes |
| Supabase | Remote database, authentication, backend services, and real-time messaging |
| Supabase Storage | Profile photo storage |
| TanStack Query | Remote data fetching, caching, and synchronization |
| AsyncStorage | Local persistence |
| React Hook Form and Zod | Form management and validation |
| Jest and React Native Testing Library | Automated testing |
| ESLint and Prettier | Code quality and formatting |
| Husky | Pre-commit quality checks |
| GitHub Projects | Task management and sprint tracking |
| GitHub Pull Requests | Code review and controlled merging |
| Microsoft Teams | Team communication, meetings, and progress updates |
| Email delivery service | Sending game invitations to recipient email addresses |

---

## 6. Data

The following is a proposed initial data model. The team will review and finalize the schema during implementation.

| Table or API Resource | Fields | Screens That Use It |
|---|---|---|
| Games | `id`, `title`, `sport`, `description`, `location`, `game_date`, `capacity`, `created_by` | Home, Explore, Game Details, Create Game |
| Profiles | `id`, `display_name`, `email`, `profile_photo_url` | Sign In, Profile, Game Details, My Games, Invites |
| Participants | `id`, `game_id`, `user_id`, `status` | Game Details, My Games |
| Invitations | `id`, `game_id`, `sender_id`, `recipient_email`, `status` | Invites, Game Details |
| Messages | `id`, `sender_id`, `recipient_id`, `content`, `created_at` | Messaging |

The messaging and invitation data structures will begin development in Sprint 2 and be expanded during Sprint 3. The user profile structure will also be expanded during Sprint 3 to support profile photos and account management functionality.

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

Each sprint will include a dedicated QA issue. Testing will focus on the functionality delivered during that sprint, including validation, navigation, error handling, and regression testing where applicable.

### Definition of Done

A task is considered complete when its acceptance criteria are met, required checks pass, the functionality has been tested, and the pull request has received the required review and has been merged.

QA issues are complete when the planned tests have been performed, results are documented, identified bugs are reported, and available fixes have been retested. Unresolved defects and incomplete features will be tracked for follow-up.

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
- Support game participation and email invitation development.

### Frontend Developer and Secondary QA: `jordangatewood28`

**Primary Responsibilities: Frontend Development**

- Implement screens, navigation, and reusable UI components.
- Develop user-facing forms and interactions.
- Connect frontend components to backend services.
- Develop the real-time messaging interface and support its integration.
- Address frontend bugs and usability issues.

**Secondary Responsibilities: Quality Assurance**

- Test assigned screens and user interactions.
- Identify and document bugs.
- Support automated and manual testing.
- Review changes for regressions.
- Assist with sprint QA, integration, and final testing.

### Backend Developer and Secondary UI/UX Designer: `alexmorari7`

**Primary Responsibilities: Backend Development**

- Design and maintain the Supabase database.
- Implement data retrieval and modification operations.
- Support game creation and participation functionality.
- Develop backend functionality for real-time messaging and email invitations.
- Manage backend integration and data integrity.

**Secondary Responsibilities: UI/UX Design**

- Create and refine application wireframes.
- Support screen layouts and user-flow design.
- Review visual consistency across screens.
- Collaborate with frontend developers to align implementation with approved wireframes.
- Identify usability improvements and accessibility concerns.

### QA / Tester and Secondary Frontend Developer: `MM-109`

**Primary Responsibilities: QA and Testing**

- Define test cases and acceptance criteria.
- Coordinate dedicated QA testing for each sprint.
- Test screens, navigation, forms, and user interactions.
- Identify, document, and reproduce bugs.
- Run automated tests and quality checks.
- Review changes for regressions throughout development.
- Coordinate final regression testing before submission.

**Secondary Responsibilities: Frontend Development**

- Develop assigned frontend screens and navigation.
- Build reusable UI components and maintain consistent styling.
- Implement frontend interactions and screen layouts.
- Support frontend integration and resolve assigned issues.
- Implement user authentication and user profile functionality.
- Collaborate with the team on frontend development and code reviews.

Each member will also provide additional support through code reviews, testing, documentation, or troubleshooting as agreed by the team.

---

## 9. Version Control Workflow

| Item | Policy |
|---|---|
| Main Branch | Stable releases, updated from `develop` at the end of each sprint |
| Develop Branch | Ongoing development and the repository's default branch |
| Feature Branches | Separate branches for assigned issues, created from `develop` |
| Pull Requests | All changes are submitted through pull requests targeting `develop` and reviewed by at least one teammate who did not author the changes |
| Branch Protection | Both `main` and `develop` require pull requests and at least one approving review; direct pushes and bypassing are not allowed |
| Merge Policy | Use merge commits to preserve individual commit histories |
| Commit Message Style | Short, descriptive messages identifying the change |

**Commit Message Examples**

- `feat: add explore screen`
- `fix: correct event form validation`
- `docs: update software development plan`
- `test: add navigation tests`

### Quality Checks

Before merging, the team will verify that the required checks pass:

- ESLint
- Prettier
- TypeScript
- Automated tests

All pull requests require at least one approving review before merging.
