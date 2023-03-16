import React,{useState,createContext} from "react";

export const UserContext=createContext();

function UserProvider({children}) {

  const initialValues={firstName:"",lastName:"",age:"",gender:""}
  const [User,setUser]=useState(initialValues);
  const [Users,setUsers]=useState([]);
  
  const handleFormChange=(e)=>{
    const {name,value}=e.target;
    setUser({...User,[name]:value});
    // console.log(User);
  }
  
  return (
    <UserContext.Provider value={{User,Users,initialValues,setUser,setUsers,handleFormChange}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;