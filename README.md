# React Typescript Starter Kit

## Quick start

0.  Fork the repo
1.  Clone repo using `git clone https://github.com/<github-username>/react-ts-starter-kit.git`
2.  Move to the project directory: `cd react-ts-starter-kit`.<br />
3.  Run `npm i` in order to install dependencies.<br />
4.  Create new file in root directory named `.env` and add following lines:<br />

```
TITLE = "React Typescript Starter Kit"
```

5.  Now you can run `npm start` to see the app at `http://localhost:8080`

## Folder Structure

```
  -- src/
    -- @types/       -->  for custom typecsript types
    -- assets/       -->  for static assets and styles
    -- components/   -->  for components
        -- common/   -->  for shared components
    -- routes/       -->  for all routes
    -- sagas/        -->  for redux sagas
    -- services/     -->  for api requests
    -- slices/       -->  for slices created using @reduxjs/toolkit
    -- utils/        -->  for utility / helper functions
    -- views/        -->  for page specific/container components
```

## Quick Guide/Links

This project is built on [React Js](https://reactjs.org/) using [Typescript](https://www.typescriptlang.org/)

Here are list of libraries being used in this project:

- [Redux](https://redux.js.org/) for state management
- [Redux Saga](https://redux-saga.js.org/) for managing side-effect tasks
- [Axios](https://github.com/axios/axios) for making api calls
- [Redux Toolkit](https://redux-toolkit.js.org/) for consise redux code

Styling and linting

- [Aribnb style Guide](https://airbnb.io/javascript/react/) for rules, standards and conventions
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for linting

Bundling and compiling

- [Babel](https://babeljs.io/) for transpiling
- [Webpack](https://webpack.js.org/) for bundling

Testing

- TODO: Add testing library

## Other useful commands

`npm run lint` to fix automatically fixable lint errors

`npm run build` to build the project for production use

`npm run test` to run the tests

## Contributing to the project

1. All kinds of changes are welcome.

For help on Git commands visit [here](https://git-scm.com/)

For help on GitHub visit [here](https://docs.github.com/en)

Notes:

1.  This starter kit is inspired by this [react-starter-kit](https://github.com/sahilrajthapa/react-starter-kit).

2.  Please follow the naming and folder structure conventions while contributing to the project.

## Useful Tools

### React Dev tools

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

### Redux Dev tools

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)
- [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)

### VS Code Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
