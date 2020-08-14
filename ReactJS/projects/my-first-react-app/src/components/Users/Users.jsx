import React from "react";

const Users = (props) => {
	return (
		props.usersData.map(el => <div key={el.id}>

		</div>)
	)
}

export default Users