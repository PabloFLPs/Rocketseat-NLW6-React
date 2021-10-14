# LetMeAsk - Application
## A Simple Q&A Rooms Platform

This is a simples Q&A (questions and answers) application, developed in the 6th edition of the Next Level Week by Rocketseat (2021).

**Technologies:**
- TypeScript;
- React;
- Firebase.

**Executing the project:**
- First of all, you will need to insert your own Firebase config data.
- Create an application on Firebase with your Google account and then, copy the Firebase config and paste them on a file named ".env.local" on the project root source. Use the example below as model:
```
# Firebase Config
REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=""
REACT_APP_DATABASE_URL=""
REACT_APP_PROJECT_ID=""
REACT_APP_STORAGE_BUCKET=""
REACT_APP_MESSAGING_SENDER_ID=""
REACT_APP_APP_ID=""
```

- To install the dependencies, run `yarn` command;
- To initialize the project, run `yarn start` command.

This application project was created by the command above:
- `yarn create react-app letmeask --template typescript` will take some time :D

This will create our React App with TypeScript template/integration.

**Plus: https://react-hot-toast.com**
**This site offers an API to get toasts as alert messages.**