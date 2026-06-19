# Intern QA Report

Use this file in every PR. Add your section under the correct heading.

## PR Link

- Add PR link here.

## Feature Tested

- Project Search by Name
- Project Status Filtering
- Create Project Form Validation

## Test Cases

| Case                                 | Expected Result                                        | Actual Result                                  | Status |
| ------------------------------------ | ------------------------------------------------------ | ---------------------------------------------- | ------ |
| Search project using "Website"       | Only projects containing "Website" are displayed       | Matching projects were displayed correctly     | Pass   |
| Filter projects by "Planning" status | Only projects with Planning status are displayed       | Only Planning projects were shown              | Pass   |
| Search and status filter together    | Only projects matching both conditions are displayed   | Correct filtered results were shown            | Pass   |
| Submit project with empty name       | Validation message should appear                       | "Project name is required." displayed          | Pass   |
| Submit project with empty owner      | Validation message should appear                       | "Project owner is required." displayed         | Pass   |
| Submit project with valid details    | New project should be created and displayed            | Project created successfully and added to list | Pass   |
| Click Ship button on a project       | Project status changes to Shipped and risk becomes Low | Status and risk updated correctly              | Pass   |

## Commands Run

```bash
npm.cmd run test
npm.cmd run build
```

## AI Usage Notes

- What I asked AI:
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

## Screenshots

- Add screenshot links or notes here.
