import { Button, Typography } from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../Context';
import GoogleButton from 'react-google-button';
import styled from 'styled-components';

const GoogleButtonStyled = styled.div`
	display: flex;
	justify-content: center;
`;

export default function Login() {
	const user = useContext(UserContext);
	const [loggedIn, setLoggedIn] = useState(false);
	const login = () => {
		window.open(`/auth/google`, '_self');
		setLoggedIn(true);
	};

	return (
		<span>
			{!loggedIn && (
				<GoogleButtonStyled>
					<GoogleButton onClick={login} />
				</GoogleButtonStyled>
			)}

			{user && (
				<Typography variant='h4' style={{ textAlign: 'center' }}>
					Welcome {user.name}
				</Typography>
			)}
		</span>
	);
}
