# Intern QA Report

Use this file in every PR. Add your section under the correct heading.

## PR Link

- Add PR link here.

## Feature Tested

Implement send message
Prevent empty messages
Implement invite user
Validate invite email
Prevent duplicate pending invites
Add tests for message and invite behavior

## Test Cases

Case	Expected Result	Actual Result	Status
Add a project without entering a project name	Application should prevent project creation and display "Project name is required."	Project was not created and validation message was shown	Pass
Add a project without entering an owner name	Application should prevent project creation and display "Project owner is required."	Project was not created and validation message was shown	Pass
Add a project with valid name, owner, and status	New project should be added to the delivery board successfully	Project was added and success message was displayed	Pass
Send an empty message	Application should prevent sending empty messages and display an error message	Empty message was not added and validation message was shown	Pass
Send a valid message	Message should appear in the team room with author and timestamp	Message was added successfully to the message list	Pass
Enter an invalid email while sending an invite	Application should prevent the invite and show an invalid email error	Invite was not created and error message was displayed	Pass
Send an invite with a valid email	New invite should be added to the invite list with pending status	Invite was created successfully	Pass
Send an invite to an email that already has a pending invite	Application should prevent duplicate pending invites and display an error	Duplicate invite was not created and warning message was shown	Pass

## Commands Run

```bash
npm.cmd run test
npm.cmd run build
```

## AI Usage Notes

- What I asked AI:
Asked AI for guidance on implementing input validation for project creation, message sending, email validation, and duplicate invite checking.

- What code I accepted:
Accepted the validation logic for checking empty fields, email format validation using regex, and duplicate pending invite checking.

- What I changed manually:
Integrated the validation logic into the existing event handlers and customized notice messages according to the application flow.

- What tests prove it works:
Manual testing of valid and invalid inputs for project creation, messages, and invitations confirmed that validations worked correctly.

- Explanation in my own words:
I added validation checks before updating the application state. The application now prevents empty projects, empty messages, invalid email addresses, and duplicate pending invites while displaying appropriate feedback messages to the user.


## Screenshots

- Add screenshot links or notes here.
