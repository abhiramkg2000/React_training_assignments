import React, { useEffect, useState } from "react";

import "./Collapse.css";

import Form from "../Form/Form";
import Button from "../Button/Button";

function Collapse() {
  const [click, setClick] = useState(false);

  const iconChange = () => {
    if (click) {
      return "fa-angle-down";
    } else {
      return "fa-angle-up";
    }
    // className={"fa-solid" + (click ? " fa-angle-down" : " fa-angle-up")}
  };

  return (
    <div className="collapse">
      <div className={"icon-container"}>
        <Button testid="adduser" setClick={setClick}>
          Add User
          <i className={"fa-solid " + iconChange()}></i>
        </Button>
      </div>
      <div className="form-container">
        <Form click={click} />
      </div>
    </div>
  );
}

export default Collapse;
