# Sprint 1 Closeout — DropIn


**Sprint dates:** <Tue, 11/10> – <Tue, 11/17>
**Closeout commit:** https://github.com/devinethang/DropIn-Dev272/pull/48
**Board:** <[link to the GitHub Project](https://github.com/users/devinethang/projects/4/views/1)>
**Attendees at closeout:** devinethang, alexmorari7


## 1. Sprint goal and outcome

**Goal:** Implemented the basic functionality, including:

- Implement the Home screen and navigation structure.
- Build the Explore screen with game discovery and search.
- Create the Game Details screen.
- Add the My Games and Invites screen structures.
- Create the Create Game screen structure.
- Establish reusable UI components and consistent styling.
- Test navigation, screen rendering, form validation, and interactions.
- Document bugs and verify fixes.

**Outcome:** <Met> — <All of the tasks this week shipped. We were able to build the baseline structure and update the remaining issues from the previous review.


## 2. Completed


| Issue | Title                                                           | Owner                         | PR  | Reviewer |
| ----- | --------------------------------------------------------------- | ----------------------------- | --- | -------- |
| #11   | Set up Expo Router navigation structure                         | jordangatewood28, MM-109      | #34 |devinethang|
| #12   | Create the Home screen                                          | jordangatewood28, MM-109      | #34 |devinethang|
| #13   | Create Explore screens with Play                                | MM-109                        | #34 |devinethang|
| #14   | Create Game Details screen structure                            | MM-109                        | #34 |devinethang|
| #15   | Create My Games screen structure                                | alexmorari7                   | #35 |devinethang|
| #16   | Build reuseable UI components                                   | jordangatewood28              | #34 |devinethang|
| #17   | Implement responsive layouts and accessibility for core screens | devinethang, jordangatewood28 | #47 |alexmorari7|
| #18   | Review core screen consistency with approved wireframe          | devinethang                   |No change|          |
| #19   | Test navigation and core screen functionality                   | devinethang, MM-109           |No change|          |
| #42   | [BUG] My Games header overlaps iPhone status bar         | alexmorari7 | #46 |          |
| #43   | Move Data from index to data/games                       | devinethang | #44 |          |
| —     | docs: add invites and joined game detail wireframes, update user flow | devinethang | #41 |  |
| —     | docs: Updated Readme with new roles                      | alexmorari7 | #40 |          |
| —     | update software development plan                         | MM-109      | #39 |          |




## 3. Unfinished or carried over


| Issue | Title                     | Owner    | Status      | Why, and what happens next                                  |
| ----- | ------------------------- | -------- | ----------- | ----------------------------------------------------------- |
| N/A  | | | | |






## 4. Bugs and blockers


| Issue | Title                                           | Impact (blocking / moderate / minor) | Owner            | Status              |
| ----- | ----------------------------------------------- | ------------------------------------ | ---------------- | ------------------- |
| #18   | Error from improperly capitalised text elements | minor                                | jordangatewood28 | Fixed in #34        |
| # 43… | Moved data from index to data/games             | minor                                | devinethang      | Status Fixed in #44 |
| #42 | My Games header overlaps status bar | alexmorari7 | minor | Fixed in PR #46 |




## 5. Retrospective




**What worked well**


- Every change went through a PR with an approving review before merging into develop. 
- QA testing on Expo Go caught real bugs early (#18, #42) and they were tracked as issues with fixes linked to PRs. 
- Shared components (GameCard, EmptyState) and a single data file (src/data/games.ts) let screens reuse the same cards and data. 
- Husky pre-commit checks (lint, Prettier, tests) caught formatting and test failures before they reached GitHub.


**What did not work well**


- It wasn't clear until late which branch was the current frontend base, so some work was built on a branch that was later replaced and had to be moved.


**Kudos**


- MM-109: Took over a lot of the front-end development for this week to help finish up in time
- devinethang: kept the board, plan and README up to date and turned reviews around quickly


**Action items for next sprint**


| Action                                            | Owner    | Done by    |
| ------------------------------------------------- | -------- | ---------- |
| Set up Supabase event data integration | alexmorari7| 10/23 |
| Implement Join and Leave Game functionality | devinethang | 10/23 |                                  | Implement user sign-in and authentication | MM-109 | 10/23 |
| Set up real-time messaging structure | devinethang | 10/23 |
| Set up email invitation structure | jordangatewood28 | 10/23 |


## 6. Next sprint priorities


1. Set up Supabase event data integration
2. Set up user sign-in and authentication
3. Set up real-time messaging structure
4. Set up email invitation structure
5. Implement Join and Leave Game functionality


## 7. Hours (team total, approximate)


| Member           | Hours | Focus                                                                                               |
| ---------------- | ----- | --------------------------------------------------------------------------------------------------- |
| devinethang      | 8     | Review Core screen consistency, PR reviews, implement responsive layouts and accessibility, bug fixes, Sprint closeout |
| MM-109           | 7     | All the front end, except My games, soft dev plan, sprint 2 items                                   |
| jordangatewood28 | 10    | Initial front end screens, later taken over by MM-109                                                |
| alexmorari7…     |  7    | My Games screen structure Invites + joined game detail wireframes, user flow, Sprint closeout |    
Total Hours: 32             





