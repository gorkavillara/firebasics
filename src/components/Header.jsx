import React, { useContext } from "react";
import { SiFirebase } from "react-icons/si";
import { LogInContext } from "../App";
import { getAuth, signOut, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const Header = ({ routeLogin }) => {
  const { user, setUser } = useContext(LogInContext);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      })
      .catch((e) => console.log(e));
  };

  return (
    <header className="h-20 bg-gray-100 flex justify-between p-4 items-center shadow-lg">
      <div className="flex gap-2 items-center text-pink-400">
        <SiFirebase className="text-3xl" />
        <span className="text-2xl font-semibold">FireCart</span>
      </div>
      {user ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button
          onClick={routeLogin}
          className="bg-cyan-500 hover:bg-cyan-700 transition py-2 px-4 rounded-full text-white"
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
