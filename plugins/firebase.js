import firebase, {initializeApp} from 'firebase'

if(!firebase.apps.length){
  firebase.initializeApp({
    apiKey: "AIzaSyD1xlK4N0quRtlR7gVQ3K24m2LOSPt0fG8",
    authDomain: "portfolio-9d389.firebaseapp.com",
    databaseURL: "https://portfolio-9d389.firebaseio.com",
    projectId: "portfolio-9d389",
    storageBucket: "",
    messagingSenderId: "547586038009"
  })
}

export default firebase
