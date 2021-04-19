import { Button } from '@material-ui/core';
import React, {useContext, useState, useEffect} from 'react';
import UserContext from '../../Context';

export default function Login() {
	const user = useContext(UserContext);
	const login = () => {
		window.open(`/auth/google`, '_self');
	};

	return (
		<div style={{ border: '1px solid red' }}>
			<Button onClick={login}>login</Button>
			{user && <p>User: {user.googleId}</p>}
		</div>
	);
}
