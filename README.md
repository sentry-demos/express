# sentry-demos/express

## Goal/Summary:
Show how Sentry works
- Import/Integrate
- Configuration
- Releases/Commits

## First-time Setup
1. Install dependencies
```
npm install
```

3. Configure Sentry with your `DSN_KEY` in app.js
4. Remember to include your `SENTRY_AUTH_TOKEN`; you'll need to generate one
first from your Sentry server. After doing so, a cheap and easy way to use the
token would be this: `export SENTRY_AUTH_TOKEN=1010101011010101`
5. Make sure that your Github repo is integrated into your Sentry organization.
6. Enter your Sentry organization slug in the `SENTRY_ORG` line of your Makefile,
then add the name of `SENTRY_PROJECT`

```
$ npm run deploy
```
7. Hit the various APIs via another demo (e.g. https://github.com/sentry-demos/react) or postman (e.g. localhost:3001/handled)

# GIF
![Alt Text](express-js-demo.gif)autoautoauto