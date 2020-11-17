# sentry-demos/express

## Goal/Summary:
Show how Sentry works
- Import/Integrate
- Configuration
- Releases/Commits
- Performance/Tracing

## Setup
#### Versions
this was tested on:

 dependency    | version
| ------------- |:-------------:|
| @sentry/node | 5.27.4 |
| @sentry/tracing | 5.27.4 |
| body-parser | 1.19.0 | 
| cors | 2.8.5 |
| express | 4.17.1 |
| node | v.14.2 |

## First-time Setup
1. Install dependencies
```
npm install
```

2. Configure Sentry with your `DSN_KEY` in app.js
3. Remember to include your `SENTRY_AUTH_TOKEN`; you'll need to generate one
first from your Sentry server. After doing so, a cheap and easy way to use the
token would be this: `export SENTRY_AUTH_TOKEN=1010101011010101`
4. Make sure that your Github repo is integrated into your Sentry organization.
5. Enter your Sentry organization slug in the `SENTRY_ORG` line of your Makefile,
then add the name of `SENTRY_PROJECT`

```
$ npm run deploy
```
6. Hit the various APIs via another demo (e.g. https://github.com/sentry-demos/react) or postman (e.g. localhost:3001/handled)

# GIF
![Alt Text](express-js-demo.gif)

## Sentry Documentation
https://docs.sentry.io/platforms/node/guides/express/
https://docs.sentry.io/platforms/node/guides/express/#monitor-performance