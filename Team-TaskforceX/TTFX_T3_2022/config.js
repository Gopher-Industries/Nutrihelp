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
  androidKey: "1048978811841-u04p0rgma4kkjiomtlr8jdqn95qhhhbe.apps.googleusercontent.com", // android client id
  webKey: "1048978811841-l8d5ns815jd80i93u8vq06r578rpau3j.apps.googleusercontent.com", //webclient id
  iOsKey: "1048978811841-ef2bc40l3k5pg25kdoiqogsdnvnipg7b.apps.googleusercontent.com" //iOs Client ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
