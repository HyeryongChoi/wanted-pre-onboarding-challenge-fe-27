# TODO APP

Wanted Pre Onboarding Challenge FE Nov 2024

## Viewing the Deployment

You can view the live version of the project here: [Deployment Link](demolink)

## Running Locally

1. Clone the repository

```bash
 git clone https://github.com/your-username/your-repository.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and go to http://localhost:5173.

## Skills

React v18, React Router v6, TanStack-Query v5, Vite v5

## Features

### Login / SignUp

- Develop the login and sign-up functionality at the `/auth` route.
  - It is fine to separate the login and sign-up routes.
  - [ ] Ensure the page contains at least an email input, password input, and a submit button.
- Validate the email and password fields.
  - [ ] Email validation: Must contain at least `@` and `.`.
  - [ ] Password validation: Must be at least 8 characters long.
  - [ ] The submit button should only be enabled if both email and password are filled in and meet the validation requirements.
- Call the login API and redirect to the root route upon receiving a successful response.
  - [ ] Save the token received in the response to localStorage.
  - [ ] If the token exists on the next login, automatically redirect to the root route.
  - [ ] If the token is invalid at any time, alert the user and redirect them to the login page.

### Todo List

- Call the [Todo List API](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api) and implement CRUD functionality for the Todo List.
  - [x] Implement the application with separate sections for the list and detail views.
  - [x] Display the list of Todos.
  - [x] Clicking the "Add Todo" button should add a new Todo.
  - [x] Clicking the "Edit Todo" button should activate the edit mode, allowing the user to submit or cancel the changes.
  - [x] Clicking the "Delete Todo" button should remove the selected Todo.
- Allow the user to view the Todo List and the details of individual Todos on the same screen.
  - [x] Ensure the state persists even after a page refresh.
  - [x] Allow users to navigate back to view individual Todo details by using the browser's back button.
- Ensure data consistency on the page without requiring a page refresh.
  - [x] Any updates to a Todo should be reflected in the list in real-time.

## Backend Repository

The backend server repository can be found here: [Backend Repo](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)
