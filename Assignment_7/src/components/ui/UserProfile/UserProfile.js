import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import { useSelector,useDispatch } from "react-redux";

function UserProfile({ click }) {
  const dispatch=useDispatch();
  const userName = useSelector((state) => state.loginData.loginCredentials);
  return (
    <div className={"logout_container" + (click ? " show" : " hide")}>
      <p>{userName.email}</p>
      <Link className="link logout" to="/" data-testid="logout" onClick={()=>dispatch(handleLoginData(["",""]))}>
        Logout
      </Link>
    </div>
  );
}

export default UserProfile;
