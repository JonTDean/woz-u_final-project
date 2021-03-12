import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export default function User() {
	const [data, setData] = useState({
		loading: false,
		users: [],
	});

	useEffect(() => {
		const axiosUsers = async () => {
			const apiURL = `https://localhost:5001/api/users`;
			try {
				setData({ loading: true, users: data.users });
				const resp = await axios.get(apiURL);
				setData({ loading: false, users: resp.data });
			} catch (err) {
				console.log(err);
			}
		};

		axiosUsers();
	}, []);

	if (!data.users || data.users.length === 0) return <p>No Users, sorry</p>;
	console.log(data.users);
	return (
		<ul>
			<h2 className="list-head">Public Users Domain</h2>
			{data.users.map((user) => {
				return (
					<li key={user.id} className="list">
						<span className="user-id">{user.id} </span>
						<span className="user-userName">{user.userName}</span>
					</li>
				);
			})}
		</ul>
	);
}
