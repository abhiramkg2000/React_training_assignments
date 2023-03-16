import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";

import "./Table.css";
import TableRow from "./TableRow/TableRow";

function Table() {
  const { users } = useContext(UserContext);

  return (
    <div className="table-container">
      <table data-testid="table">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <TableRow key={index} index={index} user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
