import { useState, useEffect, createContext } from "react";
import { app, messaging } from "./firebase/config"
import useLogin from "./hooks/useLogin";
import { onMessage } from "firebase/messaging"

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Login from "./routes/Login";
import Settings from "./routes/Settings";
import toast, { Toaster } from "react-hot-toast";

export const LogInContext = createContext(null);

function App() {
  const [route, setRoute] = useState("home")
  const [user, setUser] = useState(null)
  const [getUser] = useLogin();
  useEffect(() => {
    const us = JSON.parse(localStorage.getItem('user'));
    console.log(us);
    setUser(us);
  }, [])

  onMessage(messaging, payload => {
    toast('Mensaje recibido!')
  })

  return (
    <LogInContext.Provider value={{ user, setUser, route, setRoute }}>
      <Toaster />
      <Header routeLogin={() => setRoute("login")} />
      <main className="p-8">
        {route === "home" && <Home />}
        {route === "shop" && <Shop />}
        {route === "login" && <Login />}
        {route === "settings" && <Settings />}
      </main>
      <Footer setRoute={setRoute} />
    </LogInContext.Provider>
  );
}

export default App;
