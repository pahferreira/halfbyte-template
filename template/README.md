# Project created with Halfbyte Template.

## Runing the Project

### Add dev dependencies

First add required devDependencies in `package.json`:

```
"devDependencies": {
  "@types/jest": "^26.0.15",
  "@types/react-dom": "^16.9.9",
  "@types/react-redux": "^7.1.9",
  "@types/react-router-dom": "^5.1.6",
  "@types/styled-components": "^5.1.4",
  "@typescript-eslint/eslint-plugin": "^4.6.0",
  "@typescript-eslint/parser": "^4.6.0",
  "eslint-config-prettier": "^6.15.0",
  "eslint-plugin-react": "^7.21.5",
  "husky": "^4.3.0",
  "prettier": "^2.1.2"
}
```

### Husky Configuration

At the bottom of `package.json` add husky config:

```
  "husky": {
    "hooks": {
      "pre-commit": "CI=true npm test"
    }
  }
```

### Install project dependencies

Using yarn:

```
yarn
```

Using npm:

```
npm install
```

### Start the Application

Using yarn:

```
yarn start
```

Using npm:

```
npm run start
```
