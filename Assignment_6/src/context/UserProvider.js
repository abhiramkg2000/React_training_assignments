import React, { useState, createContext } from "react";
export const UserContext = createContext();

function UserProvider({ children }) {
  const initialState = { email: "", password: "" };

  const [user, setUser] = useState(initialState);
  const [loginStatus, setLoginStatus] = useState(false);
  // const [loginButtonDisabled,setLoginButtonDisabled]=useState(true);

  const handleFormChange = (e) => {
    // let UserisEmpty = Object.values(user).every((item) => item === "");
    // if(!UserisEmpty)
    // {
    //   setLoginButtonDisabled(false);
    // }
    const { name, value } = e.target;
    // console.log(e.target.dataset);

    checkValidity(e);
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const checkValidity = (e) => {
    const element = e.target;
    const { name, value } = element;

    /* istanbul ignore if */
    if (name === "email") {
      if (value === "") {
        element.setCustomValidity("Email cannot be empty");
      } else if (!value.includes("@")) {
        element.setCustomValidity("Email should have @ character");
      } else {
        element.setCustomValidity("");
      }
    }

    /* istanbul ignore if */
    if (name === "password") {
      if (value === "") {
        element.setCustomValidity("password cannot be empty");
      } else if (value.length < 4) {
        element.setCustomValidity("password should have minimum 4 characters");
      } else {
        element.setCustomValidity("");
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loginStatus,
        initialState,
        setUser,
        setLoginStatus,
        handleFormChange,
        checkValidity,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
