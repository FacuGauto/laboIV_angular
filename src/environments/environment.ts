// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  //urlpaises: 'https://api.mocki.io/v1/570c5e5c'
  urlpaises: 'https://restcountries.eu/rest/v2/',
  firebase: {
    apiKey: "AIzaSyDkmu_SRKecF2omJq-LjAO4kwPVEDbnZS0",
    authDomain: "testlaboivutngauto.firebaseapp.com",
    databaseURL: "https://testlaboivutngauto.firebaseio.com",
    projectId: "testlaboivutngauto",
    storageBucket: "testlaboivutngauto.appspot.com",
    messagingSenderId: "305674435413",
    appId: "1:305674435413:web:82763ed63842dfb6868ddc"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
