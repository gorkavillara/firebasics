import React, { useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { LogInContext } from "../App";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
  const { setUser, setRoute } = useContext(LogInContext);
  const signIn = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setRoute("home");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  return (
    <div>
      <h1 className="text-3xl text-cyan-700 font-semibold">Hello login!</h1>
      <h3>Haz clic en el botón para loguearte</h3>
      <button onClick={signIn}>Log In</button>
    </div>
  );
};

export default Login;
