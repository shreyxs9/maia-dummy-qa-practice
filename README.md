# MAIA Dummy QA Practice

This is a dummy MAIA-style training app for practising real-world frontend work, testing, Git branching, pull requests, and QA reporting.

It is not connected to the real MAIA production codebase.

## Repository

https://github.com/shreyxs9/maia-dummy-qa-practice

## App Concept

The app simulates a workspace operations board with:

- Project delivery status
- Team room messages
- Workspace invites
- Project summary stats
- Starter unit/component tests

Several behaviors are intentionally left as TODOs in `src/App.tsx`.

## Setup

```bash
npm install
npm.cmd run dev
```

Open the local URL printed by Vite.

## Validation Commands

```bash
npm.cmd run test
npm.cmd run build
npm.cmd run typecheck
```

## Intern 1 Tasks

1. Implement project search by name.
2. Implement project status filtering.
3. Implement create project form.
4. Validate project name and owner before adding.
5. Add tests for project filtering and create-project validation.

Suggested branches:

- `feature/project-search`
- `feature/project-status-filter`
- `feature/create-project`
- `feature/project-validation`

## Intern 2 Tasks

1. Implement send message.
2. Prevent empty messages.
3. Implement invite user.
4. Validate invite email.
5. Prevent duplicate pending invites.
6. Add tests for message and invite behavior.

Suggested branches:

- `feature/send-message`
- `feature/message-validation`
- `feature/invite-user`
- `feature/invite-validation`

## Shared QA Task

Both interns must update `docs/intern-qa-report.md` in every PR with:

- Feature tested
- Test cases
- Expected result
- Actual result
- Commands run
- AI usage notes
- Screenshots if useful

## AI Usage Rule

AI is allowed, but every PR must include:

- What you asked AI
- What code you accepted
- What you changed manually
- Which tests prove it works
- A short explanation of the code in your own words

## Git Workflow

For every feature:

1. Create a GitHub Issue.
2. Pull latest `main`.
3. Create a separate feature branch.
4. Complete only that feature.
5. Add or update tests.
6. Run validation commands.
7. Commit with a meaningful message.
8. Push the branch.
9. Create a pull request.
10. Ask the other intern to review.
11. Merge only after approval.

## Important Rules

- Do not push directly to `main`.
- Create one branch per feature.
- Create one pull request per feature.
- Do not mix unrelated changes.
- Review each other's pull requests properly.
- PRs without test evidence should not be merged.
