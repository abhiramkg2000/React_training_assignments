import React from "react";
import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../../contexts/UserProvider";

function TableRow({ index, user }) {
  const { users, setUsers } = useContext(UserContext);
  const [editUser, setEditUser] = useState(user);
  const rowId = index;

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  useEffect(() => {
    const tempUsers = [...users];
    tempUsers[rowId] = editUser;
    // console.log("final: ",...tempUsers);
    setUsers([...tempUsers]);
  }, [editUser]);

  return (
    <>
      <tr>
        <td data-testid="rowData">
          <input
            type="text"
            name="firstName"
            data-testid="Edit"
            value={editUser.firstName}
            className="cell"
            onChange={(e) => handleChange(e, index)}
          />
        </td>
        <td data-testid="rowData">
          <input
            type="text"
            name="lastName"
            data-testid="Edit"
            value={editUser.lastName}
            className="cell"
            onChange={(e) => handleChange(e, index)}
          />
        </td>
        <td data-testid="rowData">
          <input
            type="text"
            name="age"
            data-testid="Edit"
            value={editUser.age}
            className="cell"
            onChange={(e) => handleChange(e, index)}
          />
        </td>
        <td data-testid="rowData">
          <input
            type="text"
            name="gender"
            data-testid="Edit"
            value={editUser.gender}
            className="cell"
            onChange={(e) => handleChange(e, index)}
          />
        </td>
      </tr>
    </>
  );
}

export default TableRow;
