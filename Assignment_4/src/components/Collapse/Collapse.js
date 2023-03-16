import React, { useState } from "react";

import "./Collapse.css";

import Form from "../Form/Form";
import Button from "../Button/Button";

function Collapse() {
  const [click, setClick] = useState(false);

  return (
    <div className="collapse">
      <div className={"icon-container"}>
        <Button testid="adduser" setClick={setClick}>
          Add User
          <i
            className={"fa-solid" + (click ? " fa-angle-down" : " fa-angle-up")}
          ></i>
        </Button>
      </div>
      <div className="form-container">
        <Form click={click} />
      </div>
    </div>
  );
}

export default Collapse;
