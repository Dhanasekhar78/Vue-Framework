# Vue Framework Project

A Vue 3 + Vite sample application built to demonstrate both practical examples and the theory behind core frontend concepts.

## Project Overview

This project includes components and services for:
- Vue component structure and data binding
- Reactive form handling with `v-model`
- Dynamic list rendering using `v-for`
- Axios-based asynchronous data fetching
- Local service modules for reusable data access

## Theoretical Concepts

### 1. Template Binding and Reactivity

Vue templates bind view elements to JavaScript data using double curly braces (`{{ }}`) and directive syntax.
- `{{ user.name }}` displays reactive data from the component state.
- When a data property changes, Vue automatically updates the rendered DOM.

Example:
- `UserList.vue`: binds `user.id`, `user.name`, `user.username`, `user.email`, `user.address`, `user.phone`, `user.company.name`.

### 2. Two-Way Data Binding with `v-model`

`v-model` binds form inputs to component state and keeps values synchronized both ways.
- User input updates the state immediately.
- State changes update the input value automatically.

Example:
- `RegisterForm.vue`: uses `v-model="name"` and handles form submission with a method.

### 3. List Rendering with `v-for`

`v-for` lets Vue iterate over arrays and render repeated blocks.
- Each item should have a unique `:key`.
- The loop variable is used directly in the template (no `this.` in templates).

Example:
- `UserList.vue`: loops through `users` and renders a table row for each user.

### 4. Component Lifecycle and Async Operations

Vue lifecycle hooks let you run code when a component is created, mounted, or updated.
- `created()` runs before DOM mounting but after reactive data is set up.
- `mounted()` runs after the component is placed into the DOM.

Async operations return a Promise and do not complete immediately.
- `async` marks a function that returns a Promise.
- `await` pauses execution until the Promise resolves and returns the actual value.

Example:
- `AcessUserDataService.vue`: `async created()` waits for `Service.getData()` before assigning `users`.
- `AcessUserData.js`: provides `getData()` that fetches remote user data using Axios.

### 5. Service Modules and Separation of Concerns

Service modules keep data access separate from UI components.
- Components remain focused on rendering and user interaction.
- Services handle data retrieval and business logic.

Example:
- `service.js`: provides static local user data via `getUsers()`.
- `AcessUserData.js`: provides remote user data via Axios.

## Components and Examples

- `RegisterForm.vue`
  - Demonstrates user input handling, `v-model`, and form submit events.
  - Uses reactive state inside `data()` and `methods`.

- `UserList.vue`
  - Demonstrates local array rendering with `v-for`.
  - Shows how to display nested object fields in a table.

- `AcessUserDataService.vue`
  - Demonstrates fetching remote JSON data with Axios.
  - Uses lifecycle hook and async/await.

- `service.js`
  - Provides a local data provider for `UserList.vue`.

- `AcessUserData.js`
  - Provides a remote data provider for `AcessUserDataService.vue`.

## Setup

Install dependencies:

```sh
npm install
```

Run development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview production build:

```sh
npm run preview
```

## Dependencies

- `vue` 3
- `vite`
- `axios`
- `vue-router`

## Recommended Tools

- VS Code
- Volar extension for Vue support

## Notes for Recap

- `v-model` is the easiest way to bind input elements to reactive state.
- `v-for` is used for rendering arrays and must include a unique `:key`.
- `async/await` is the preferred way to handle asynchronous API calls in Vue lifecycle hooks.
- Service files encapsulate data fetching so the component logic stays clean.
- Vue templates should use local loop variables (`user`), not `this.user`.
