// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pubNub: {
    channel: "hacker-news",
    subscribeKey: "sub-c-c00db4fc-a1e7-11e6-8bfd-0619f8945a4f",
    publishKey: "pub-c-f31456d8-aa10-4d17-8e55-bebddfdde9db",
    uuid: "test"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
