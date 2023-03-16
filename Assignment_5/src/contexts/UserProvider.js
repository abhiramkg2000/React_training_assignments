import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const initialValues = { firstName: "", lastName: "", age: "", gender: "" };
  const [user, setUser] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  // let tempArray = [];
  // let UserisEmpty=User.firstName!==""&&User.lastName!==""&&User.age!==""&&User.gender!=="";
  let UserisEmpty = Object.values(user).every((item) => item === "");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log("user: ",{...user});
  };

  useEffect(() => {
    // console.log("UseEffect Object values: ",Object.values(User).every((item)=>item===""));
    if (!UserisEmpty) {
      const timeId = setTimeout(() => {
        TempUsersValues(user);
      }, 5000);

      return () => clearTimeout(timeId);
    }
  }, [user]);

  const TempUsersValues = (user) => {
    const tempUsers = [...users];
    tempUsers[index] = user;
    // console.log("tempusers",...tempUsers);
    setUsers(tempUsers);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        users,
        initialValues,
        index,
        setIndex,
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
