import React, { useContext, useEffect } from "react";
import "./App.css";

import { UserContext } from "./context/UserProvider";

import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const { loginStatus, setLoginStatus } = useContext(UserContext);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    // console.log(loginStatus);
    // console.log("isLoggedIn",isLoggedIn)
    // console.log("storedStatus",JSON.parse(storedStatus).isLoggedIn);
    /* istanbul ignore if */
    if (isLoggedIn) {
      setLoginStatus(true);
    }
  }, []);

  // console.log("loginStatus",loginStatus);
  return (
    <div className="App">{loginStatus ? <HomePage /> : <LoginPage />}</div>
  );
}

export default App;
