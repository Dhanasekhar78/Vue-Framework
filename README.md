# Vue Framework Project

A Vue 3 + Vite sample application demonstrating core concepts such as:
- template binding and event handling
- list rendering with `v-for`
- form data binding with `v-model`
- service-based async data loading with Axios
- component-driven UI structure

## Features

- `RegisterForm.vue`: two-way binding and submit handling
- `UserList.vue`: rendering a local user list
- `AcessUserDataService.vue`: fetching remote user data with Axios
- `service.js`: shared service for static user data
- `AcessUserData.js`: Axios-backed service for JSONPlaceholder user data

## Project Setup

```sh
npm install
```

## Development

```sh
npm run dev
```

Open the displayed local URL in your browser, usually `http://localhost:5173`.

## Production Build

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Dependencies

- `vue` 3
- `vite`
- `axios`
- `vue-router`

## Recommended Editor

- VS Code
- Vue extension: Volar

## Notes

- The project uses ES module imports and the Vite dev server.
- If you add new files, restart the dev server to ensure Vite picks them up.
- The remote service demo uses `https://jsonplaceholder.typicode.com/users`.
