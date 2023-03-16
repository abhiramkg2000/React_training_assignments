import React,{useContext} from 'react'
import { UserContext } from '../../contexts/UserProvider';
import "./Table.css"

function Table() {
  const {Users}=useContext(UserContext);
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
				{Users.map((user,index)=>{
					return(
						<tr key={index}>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>{user.age}</td>
							<td>{user.gender}</td>
						</tr>
					);
				})}
				</tbody>
			</table>
    </div>
  )
}

export default Table;