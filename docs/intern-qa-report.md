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

Case Expected Result Actual Result Status
Add a project without entering a project name Application should prevent project creation and display "Project name is required." Project was not created and validation message was shown Pass
Add a project without entering an owner name Application should prevent project creation and display "Project owner is required." Project was not created and validation message was shown Pass
Add a project with valid name, owner, and status New project should be added to the delivery board successfully Project was added and success message was displayed Pass
Send an empty message Application should prevent sending empty messages and display an error message Empty message was not added and validation message was shown Pass
Send a valid message Message should appear in the team room with author and timestamp Message was added successfully to the message list Pass
Enter an invalid email while sending an invite Application should prevent the invite and show an invalid email error Invite was not created and error message was displayed Pass
Send an invite with a valid email New invite should be added to the invite list with pending status Invite was created successfully Pass
Send an invite to an email that already has a pending invite Application should prevent duplicate pending invites and display an error Duplicate invite was not created and warning message was shown Pass

## Commands Run

```bash
npm.cmd run test
npm.cmd run build
```

## AI Usage Notes

- What I asked AI:
  <<<<<<< HEAD
  I asked AI for help with:

-Implementing project search by name.
-Adding project status filtering.
-Completing the create project form functionality.
-Validating the project name and owner fields before adding a project.

- What code I accepted:
  I used the AI-generated code for:

-Filtering projects based on the search input and selected status.
-Creating a new project from the form inputs.
-Validating that the project name and owner are not left empty.
-Displaying success and error messages.

- What I changed manually:

-Added the project search logic so projects can be searched by name.
-Added the status filtering logic to display projects based on the selected status.
-Replaced the placeholder code in the create-project function with working functionality.
-Added validation to ensure that both the project name and owner fields are filled in before a project can be created.
-Tested the application manually using different project names, owners, search terms, and status filters to confirm that the features worked correctly.

- What tests prove it works:
  Verified that an error message is displayed when the project name field is left empty.
  Verified that an error message is displayed when the owner field is left empty.
  Verified that a new project is successfully created when valid project details are entered.
  Verified that projects can be searched by name using the search bar.
  Verified that projects can be filtered by their status (Planning, In Progress, Blocked, or Shipped).
  Verified that search and status filtering work correctly when used together.
  Created multiple projects with different names, owners, and statuses to test the functionality manually.
  Tested validation by submitting forms with missing values.
  Confirmed that newly created projects appear immediately in the project list.
  Confirmed that project statistics update correctly after a new project is adde

- Explanation in my own words:
  Short explanation of the code in my own words
  I added functionality that allows users to search for projects by name and filter them by their current status. I also completed the create-project form so users can add new projects to the board.
  Before a project is added, the code checks whether both the project name and owner fields have been filled in. If either field is empty, an error message is shown. If the information is valid, the new project is added to the list and a success message is displayed.
  I also added tests to make sure the filtering and project creation features work as expected and continue to work after future changes.
  =======
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
