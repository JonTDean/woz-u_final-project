import React from 'react';

function UsersList({ users }) {
	return users.map((user) => {
		return (
			<li key={user.id} className="list">
				<span className="user-id">{user.id} </span>
				<span className="user-userName">{user.userName}</span>
			</li>
		);
	});
}

export default UsersList;
