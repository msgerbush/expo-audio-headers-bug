This is a simple Expo + Node (Express) monorepo to demonstrate a bug in expo-audio, where it does not pass HTTP headers on AudioSources in iOS.

To run the Express app: `cd server && npm start`.  This server will respond with a 403 unless the header `Authorization: Bearer valid-token` is passed, and it serves a single static file `/example-music-01.mp3`.

To run the expo app: `npm run ios` or `npm run android`.  On iOS, the Play File with Auth button will not work. 
