import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const gitHugProvider = new GithubAuthProvider();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const googleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        const { displayName, email, photoURL } = result.user;

        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(loggedInUser);
      })
      .catch((err) => {
        //console.log(err.message);
        setError(err.message);
      });
  };

  const gitHubSignIn = () => {
    signInWithPopup(auth, gitHugProvider)
      .then((result) => {
        console.log(result.user);
        const { displayName, email, photoURL } = result.user;

        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };

        setUser(loggedInUser);
      })
      .catch((err) => {
        //console.log(err.message);
        setError(err.message);
      });
  };

  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return { googleSignin, gitHubSignIn, logOut, user, error };
};

export default useFirebase;
