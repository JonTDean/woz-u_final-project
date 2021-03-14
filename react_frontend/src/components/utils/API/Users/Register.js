import axios from 'axios';
import { dotNetAPI } from '../APIHandler';

// @Http	POST
// @Url 	https://localhost:5001/account/login
export default async function GetUsers(setData) {
	const apiURL = `${dotNetAPI}account/login`;

	try {
		setData({ loading: true });
		const resp = await axios.post(apiURL);
		setData({
			loading: false,
			// PUT DATA IN HERE
		});
	} catch (err) {
		console.log(err);
		setData({
			loading: false,
			// PUT DATA IN HERE
		});
	}
}
