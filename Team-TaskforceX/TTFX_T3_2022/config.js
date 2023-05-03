import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEIZckp_ukg_n9-fvWbfW6Cd9cNbzEcao",
  authDomain: "sit-22t3-team-task-for-137936f.firebaseapp.com",
  projectId: "sit-22t3-team-task-for-137936f",
  storageBucket: "sit-22t3-team-task-for-137936f.appspot.com",
  messagingSenderId: "265422758991",
  appId: "1:265422758991:web:cbe15f904993256f8df63a",
  //   apiKey: "AIzaSyCNEHwmZYV9nOD0Zjr49FLbDKidBNGsrY4",
  //   authDomain: "myfirstapp-d4fb5.firebaseapp.com",
  //   projectId: "myfirstapp-d4fb5",
  //   storageBucket: "myfirstapp-d4fb5.appspot.com",
  //   messagingSenderId: "950309420225",
  //   appId: "1:950309420225:web:e71fb18cdc38408979e840",
  //   measurementId: "G-DK49L9R7Q0",
};

export const googleConfig = {
  androidKey: "865542999903-a8il0krmfckkf9qenl6v6tvsn25sftqf.apps.googleusercontent.com", // android client id
  webKey: "865542999903-e20vtt4857cequ4f8dneefnrn8fu2gc6.apps.googleusercontent.com", //webclient id
  iOsKey: "865542999903-s29730rel8o0oe37oi1bglfu9ii36o4o.apps.googleusercontent.com" //iOs Client ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
