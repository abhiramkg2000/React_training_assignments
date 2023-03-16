import React, { useState, createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const initialValues = { firstName: "", lastName: "", age: "", gender: "" };
  const [user, setUser] = useState(initialValues);
  const [users, setUsers] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(User);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        users,
        initialValues,
        setUser,
        setUsers,
        handleFormChange,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
