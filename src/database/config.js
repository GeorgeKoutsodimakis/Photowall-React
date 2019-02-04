import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBt_dg-ZJyxPdNU-c_-2A_iSVmjujPNI7c",
    authDomain: "photowall-da4ba.firebaseapp.com",
    databaseURL: "https://photowall-da4ba.firebaseio.com",
    projectId: "photowall-da4ba",
    storageBucket: "photowall-da4ba.appspot.com",
    messagingSenderId: "887033832652"
  }

  firebase.initializeApp(config)
  const database = firebase.database()

export {database}