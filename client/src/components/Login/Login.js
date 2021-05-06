import { Button, Typography } from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../Context';
import GoogleButton from 'react-google-button';
import styled from 'styled-components';

const StyledButton = styled.div`
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
			{!user && (
				<StyledButton>
					<GoogleButton onClick={login} />
				</StyledButton>
			)}

			{user && (
				<div>
					<Typography variant='h4' style={{ textAlign: 'center' }}>
						Welcome {user.name}
					</Typography>
					<StyledButton>
						<Button href='/api/logout' variant='outlined'>
							Logout
						</Button>
					</StyledButton>
				</div>
			)}
		</span>
	);
}
