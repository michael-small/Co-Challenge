import { Button } from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../Context';
import GoogleButton from 'react-google-button';
import styled from 'styled-components';

export default function Login() {
	const GoogleButtonStyled = styled.div`
		display: flex;
		justify-content: center;
	`;

	const user = useContext(UserContext);
	const login = () => {
		window.open(`/auth/google`, '_self');
	};

	return (
		<GoogleButtonStyled>
			<GoogleButton onClick={login} />
		</GoogleButtonStyled>
	);
}
