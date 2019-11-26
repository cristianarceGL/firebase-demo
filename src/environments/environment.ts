// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAfZQYLQkZ-XlLiX80KlpbVYTSoY2GaGLk',
    authDomain: 'gl-firebase.firebaseapp.com',
    databaseURL: 'https://gl-firebase.firebaseio.com',
    projectId: 'gl-firebase',
    storageBucket: 'gl-firebase.appspot.com',
    messagingSenderId: '361197413837',
    appId: '1:361197413837:web:c6b562a5ed32dcf2251084',
    measurementId: 'G-712094H456'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
