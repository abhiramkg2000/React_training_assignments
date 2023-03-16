import React, { useContext, useEffect } from "react";
import "./HomePage.css";

import Button from "../../components/ui/Button/Button";
import { UserContext } from "../../context/UserProvider";

function HomePage() {
  const { setLoginStatus } = useContext(UserContext);

  let storedUser;

  const handleLogout = () => {
    // const tempUser= JSON.parse(localStorage.getItem("user"));
    localStorage.removeItem("isLoggedIn");
    // localStorage.setItem("user",JSON.stringify({"isLoggedIn":false}));
    setLoginStatus(false);
  };

  return (
    <div className="home-page" data-testid="homepage">
      <nav>
        <h2>Welcome</h2>
        <Button testid="logout" handleLogout={handleLogout}>
          Logout
        </Button>
      </nav>
      <div className="home-page-content">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default HomePage;
