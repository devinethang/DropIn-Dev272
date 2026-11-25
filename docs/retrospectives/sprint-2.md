
# Sprint 2 Closeout — DropIn

**Sprint dates:** <Wed, 11/18> – <Tue, 11/24>

**Closeout issue:** #56

**Board:** [Link to the GitHub Project](https://github.com/users/devinethang/projects/4/views/1)

**Attendees at closeout:** devinethang, MM-109

## 1. Sprint goal and outcome

**Goal:** Implement authentication and game management functionality, including:

- Set up Supabase event data integration.
- Implement user sign-in and authentication.
- Implement user registration and email verification.
- Implement Join and Leave Game functionality.
- Connect game creation and management to Supabase.
- Set up real-time messaging structure.
- Set up email invitation structure.
- Test authentication and game management functionality.
- Document bugs and verify fixes.

**Outcome:** <Met> — All Sprint 2 tasks were completed. The team successfully integrated Supabase, implemented user authentication and game management functionality, and established the foundation for real-time messaging and email invitations. All development PRs were reviewed, approved, and merged into develop. The remaining email invitation QA findings will carry over to Sprint 3.

## 2. Completed

| Issue | Title | Owner | PR | Reviewer |
| ----- | ----- | ----- | --- | -------- |
| #20 | Set up Supabase event data integration | alexmorari7 | #53 | devinethang |
| #36 | Implement user sign-in and authentication | MM-109 | #54 | alexmorari7 |
| #21 | Implement Join and Leave Game functionality | devinethang | #62 | jordangatewood28 |
| #37 | Set up real-time messaging structure | devinethang | No change | |
| #38 | Set up email invitation structure | jordangatewood28 | #55 | MM-109 |
| #52 | Test authentication and game management functionality | MM-109 | No change | |
| — | Remove redundant authentication navigation | MM-109 | #57 | devinethang |
| — | Update Software Development Plan for Sprints 2 and 3 | MM-109 | #63 | alexmorari7 |

## 3. Unfinished or carried over

| Issue | Title | Owner | Status | Why, and what happens next |
| ----- | ----- | ----- | ------ | -------------------------- |
| #38 | Email invitation validation | jordangatewood28 | Carryover | Improve email validation to reject incomplete email addresses in Sprint 3. |
| #38 | Keyboard dismissal | jordangatewood28 | Carryover | Implement keyboard dismissal when tapping outside input fields in Sprint 3. |
| #38 | Supabase invitation integration | jordangatewood28 | Carryover | Complete database integration as part of email invitation functionality in Sprint 3. |
| #38 | Game ID association | jordangatewood28 | Carryover | Associate invitations with game IDs instead of game names in Sprint 3. |

The initial email invitation structure was completed within the scope of Sprint 2. The remaining findings will be addressed as part of email invitation functionality in Sprint 3 (#60).

## 4. Bugs and blockers

| Issue | Title | Impact (blocking / moderate / minor) | Owner | Status |
| ----- | ----- | ------------------------------------ | ----- | ------ |
| #36 | Redundant authentication navigation | minor | MM-109 | Fixed in PR #57 |
| #38 | Game and Player input fields shared the same state | moderate | jordangatewood28 | Fixed in PR #55 |
| #38 | Incomplete email addresses accepted | moderate | jordangatewood28 | Carryover to Sprint 3 |
| #38 | Keyboard obstructs Send Invite button and does not dismiss when tapping outside | moderate | jordangatewood28 | Carryover to Sprint 3 |
| #38 | Supabase invitations table not found in schema cache | blocking | jordangatewood28 | Carryover to Sprint 3 |
| #38 | Invitations associated with game names instead of game IDs | moderate | jordangatewood28 | Carryover to Sprint 3 |

## 5. Retrospective

**What worked well**

- Team communication improved compared to Sprint 1.
- Team members had a clearer understanding of their responsibilities and what was expected of them.
- Team members shared their knowledge and learned from each other.
- The shared Supabase project allowed team members to work on different features using the same backend.
- Every development PR went through an approving review before merging into develop.
- QA testing on Expo Go helped identify bugs and document the remaining work for Sprint 3.

**What did not work well**

- Some Supabase functionality took longer than anticipated due to differences in team members' experience with the platform.
- Additional work was identified during the review of the email invitation structure and will carry over to Sprint 3.

**Kudos**

During Sprint 2, a Kudos of the Week survey was conducted using Google Forms. Team members were asked to anonymously vote and provide a reason for their nomination. Three responses were received, resulting in a three-way tie.

- alexmorari7 (33.3%): For setting up Supabase for the team.
- devinethang (33.3%): For making an effort to keep the project on schedule.
- MM-109 (33.3%): For doing a great job setting up sign-in authentication.


**Action items for next sprint**

| Action | Owner | Done by |
| ------ | ----- | ------- |
| Implement user profile and account management (#58) | MM-109 | 12/01 |
| Resolve outstanding email invitation QA findings | jordangatewood28, MM-109 | 12/01 |
| Test user profile and communication functionality (#61) | MM-109 | 12/01 |
| Implement real-time in-app messaging (#59) | devinethang, alexmorari7 | 12/01 |
| Implement email invitation functionality (#60) | jordangatewood28, alexmorari7 | 12/01 |

## 6. Next sprint priorities

1. Implement user profile and account management.
2. Implement real-time in-app messaging.
3. Implement email invitation functionality.
4. Resolve outstanding email invitation bugs from Sprint 2.
5. Test user profile and communication functionality.
6. Document bugs and verify fixes.

## 7. Hours (team total, approximate)

| Member | Hours | Focus |
| ------ | ----- | ----- |
| devinethang | 7 | Join and Leave Game functionality, Supabase game creation, real-time messaging structure, PR reviews |
| MM-109 | 7 | User authentication, registration, email verification, authentication navigation fixes, QA testing, PR review, Software Development Plan, Sprint 3 issues, Sprint closeout |
| jordangatewood28 | 5 | Email invitation structure, bug fixes, PR review |
| alexmorari7 | 8 | Supabase setup, event data integration, TanStack Query integration, PR reviews |

Total Hours: 27
