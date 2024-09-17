# Redux Application for Creating Workflows with LLM Tools

## Features

- nav toggles workflow/ generation lists in the left hand menu

## TODO

Edit Workflow page:
2 Flex columns:

- One for Creating/ editing workflows. One for Workflow configs. These are all constant.

Show Generation Page:

- Depending on response data, render appropriate data: graphs, text, lists etc.
- Include which workflow the generation used.

Visual Queues:

- Highlighting selected menu item
- Scroll menu and workflow path. Maybe fixed workflow title on edit page

Security:

- Validate URL strings

## Bugs

- Spinner placement on Loading state for fetching workflows and Generations.
- Keep nav tabs highlighted when selecting from the left menu.

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
