import React, { useEffect, useState } from 'react';
import GetUsers from '../utils/API/Users/GetUsers';
import UsersList from './UsersList';

export default function User() {
	const [data, setData] = useState({
		loading: false,
		users: [],
	});

	useEffect(() => {
		GetUsers(setData);
	}, []);

	if (!data.users || data.users.length === 0) {
		return <p>No Users, sorry</p>;
	} else {
		return (
			<ul>
				<h2 className="list-head">Public Users Domain</h2>
				<UsersList users={data.users} />
			</ul>
		);
	}
}
