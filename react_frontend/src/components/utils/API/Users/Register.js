import axios from 'axios';
import { dotNetAPI } from '../APIHandler';

// @Http	POST
// @Url 	https://localhost:5001/account/login
export default async function Register({ username, password }) {
	const apiURL = `${dotNetAPI}account/register`;

	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({
			Username: username,
			Password: password,
		});

		const resp = await axios.post(apiURL, body, config);
		console.log('Data is: ', resp.data);
	} catch (err) {
		console.log(err.response.data);
	}
}
