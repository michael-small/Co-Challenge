import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import envs from './envs/envs';

const UserContext = createContext({});

function UserContextProvider(props) {
	const [user, setUser] = useState(undefined);

	useEffect(() => {
		getUser();
	}, []);

	async function getUser() {
		const res = await axios.get(`${envs}/api/current_user`, {withCredentials: true});
		console.log("getUser() res.data: " + JSON.stringify(res.data));
		setUser(res.data);
		console.log("user: " + JSON.stringify(user));
	}

	return (
		<UserContext.Provider value={user}>{props.children}</UserContext.Provider>
	);
}

export default UserContext;
export { UserContextProvider };