import axios from 'axios';
import { dotNetAPI } from '../APIHandler';

// @Http	GET
// @Url 	https://localhost:5001/api/users
export default async function GetUsers(setData) {
	const apiURL = `${dotNetAPI}api/users`;

	try {
		setData({ loading: true });
		const resp = await axios.get(apiURL);
		setData({ loading: false, users: resp.data });
	} catch (err) {
		console.log(err);
		setData({
			loading: false,
			users: [{ id: '', userName: `${err}` }],
		});
	}
}
