import React, { useRef, useContext } from "react";
import "./Form.css";

import { UserContext } from "../../contexts/UserProvider";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import ComboBox from "../ComboBox/ComboBox";
import RadioButton from "../RadioButton/RadioButton";

function Form({ click }) {
  const checkbox1 = useRef();
  const checkbox2 = useRef();
  const checkbox3 = useRef();

  const { user, users, index,setIndex, initialValues, setUser, setUsers,handleFormChange } =
    useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Submit working");
    const tempUsers = [...users];
    tempUsers[index] = user;
    setUsers(tempUsers);
    
    setIndex((prevIndex) => prevIndex + 1);

    // console.log("Users after getting Submitted: ", users);

    setUser(initialValues);

    checkbox1.current.checked = false;
    checkbox2.current.checked = false;
    checkbox3.current.checked = false;
  };

  // useEffect(()=>{
  //   console.log("Users : ", ...users);
  // },[users])

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit}
      className={"form" + (click ? " active" : " hidden")}
    >
      <div className={"firstname"}>
        <TextField
          name="firstName"
          id="firstname"
          value={user.firstName}
          handleFormChange={handleFormChange}
        />
      </div>
      <div className={"lastname"}>
        <TextField
          name="lastName"
          id="lastname"
          value={user.lastName}
          handleFormChange={handleFormChange}
        />
      </div>
      <div className={"age"}>
        <ComboBox
          name="age"
          id="age"
          list="agelist"
          value={user.age}
          handleFormChange={handleFormChange}
        />
      </div>
      <div className={"gendercontainer"}>
        <div className={"gendertitle"}>
          <p>Select Gender</p>
        </div>
        <div className={"gender"}>
          <RadioButton
            name="gender"
            checkbox1={checkbox1}
            checkbox2={checkbox2}
            checkbox3={checkbox3}
            handleFormChange={handleFormChange}
          />
        </div>
      </div>
      <div className={"btn"}>
        <Button testid="submit" setClick={() => {}}>
          Save
        </Button>
      </div>
    </form>
  );
}

export default Form;
