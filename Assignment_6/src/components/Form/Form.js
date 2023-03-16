import React, { useContext } from "react";
import "./Form.css";

import Button from "../ui/Button/Button";
import TextField from "../ui/TextField/TextField";
import PasswordField from "../ui/PasswordField/PasswordField";
import { UserContext } from "../../context/UserProvider";

function Form() {
  const {
    user,
    initialState,
    setUser,
    setLoginStatus,
    handleFormChange,
    checkValidity,
  } = useContext(UserContext);

  // useEffect(()=>{
  //   console.log(user);
  // },[user])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(Object.values(user));
    localStorage.setItem("isLoggedIn", true);
    setLoginStatus(true);
    setUser(initialState);
  };

  return (
    <form data-testid="form" onSubmit={handleSubmit} className={"form"}>
      <div className="form-title">
        <h1>User Login</h1>
      </div>
      <div className="user-input">
        <div className={"email"}>
          <TextField
            name="email"
            id="email"
            value={user.email}
            handleFormChange={handleFormChange}
            checkValidity={checkValidity}
          />
        </div>
        <div className={"password"}>
          <PasswordField
            name="password"
            id="password"
            value={user.password}
            handleFormChange={handleFormChange}
            checkValidity={checkValidity}
          />
        </div>
      </div>
      <div className={"btn"}>
        <Button testid="login">Login</Button>
      </div>
    </form>
  );
}

export default Form;
