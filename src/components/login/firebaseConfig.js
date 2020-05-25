import * as firebase from "firebase";



export const firebaseInit = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAxZ7xJ7cpcLdNVwt_Pc36zrIZqdf1PNIg",
        authDomain: "no-ones-shoes.firebaseapp.com",
        databaseURL: "https://no-ones-shoes.firebaseio.com",
        projectId: "no-ones-shoes",
        storageBucket: "no-ones-shoes.appspot.com",
        messagingSenderId: "1061260775121",
        appId: "1:1061260775121:web:f9535dc37ed76f0717fff0",
        measurementId: "G-D2JTR109NG"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};
