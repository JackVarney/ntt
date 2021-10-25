### N.T.T

The project is built with React, TypeScript and Redux Toolkit

The UI components use MUI. Styling is done with emotion rather than styled components (purely because MUI required emotion, I have no preference)

It should be more or less responsive too.

to run:

- yarn install
- yarn server:start
- yarn start

If you run into rate limiting issues from the itunes API there is a "fake-api" endpoint. You'll need to update the url used in 'itunes-service'

To test:

- yarn test
