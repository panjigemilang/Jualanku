import Firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBKtzXLMlA_e7eSY-aIcVg6g06iwQ8gs-s",
  databaseURL: "https://newagent-d724d.firebaseio.com/",
  projectId: "newagent-d724d",
  appId: "1:134600357072:android:21c57e963403d5f5dd5ad5",
}

export default Firebase.initializeApp(firebaseConfig)
