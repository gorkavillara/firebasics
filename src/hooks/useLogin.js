import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const useLogin = () => {
    const isLoggedIn = () => {
        const token = localStorage.getItem('token');
        return token === null ? false : true;
    }
    const getUser = () => {
        const user = localStorage.getItem('user');
        return user === null ? {} : user;
    }
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
                return user;
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
    const signOut = () => null
    return [
        isLoggedIn,
        getUser,
        signIn,
        signOut
    ]
}


export default useLogin
