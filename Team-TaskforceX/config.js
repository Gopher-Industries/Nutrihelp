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
  androidKey: "436079732543-gb38190nmbq9o0ushru0oi5kvhkag36g.apps.googleusercontent.com", // android client id
  webKey: "436079732543-5f52oca1gkig2cr8b0f90ss61a0n2s07.apps.googleusercontent.com", //webclient id
  iOsKey: "436079732543-cnf4f12bonf11rtuhvb134vs2sbht9io.apps.googleusercontent.com" //iOs Client ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
