import React from 'react';
import axios from 'axios';
import envs from '../../../envs/envs';

// Change to standalone imports, or move the standalones to this array
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	IconButton,
} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Comment(props) {
	const [user, setUser] = [''];

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	async function deleteComment() {
		await axios.delete(`${envs}/comments/${props.id}`);
		props.deleteComment();
	}

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const TEMP_DEV_PHOTO =
		'https://lh3.googleusercontent.com/fife/ABSRlIrLS8xWIB3GFNQ56m5yOW3uBZ6vtyw92EGwGXnSzPEztH8tHrTVK-srdB03wB0RCwzFdF4H7i0Cev5zt4MbVxCPyz-UR-hK10ahL07NB0aGH1oLaceB3mYCgBrpviKpVb1-Ic-FJcHVStl8_SX_R1Q3FxDtVun28JELbTl5KHfPHNYsJL3qOVtpm2K3O40NuNQpHawPmz6CaSZoIIAjowXaL3WC8K9A46ove6LHAtTfwp70WLG76PiuTOak5YJFsPEmdJHMBRZAGOk4m5HSGMXUvw2Abizecq5N2lqpo_DIwm1KR6FHYIkXK5o4OuDcvNSn-E3Bhxj1lbzmjpfOnaDV4yFUKfAP-EE1t0DbenFQvkvdcqSWCDpGQUBpPYK0nSKdr4yZp6wvyfLjYQPd9Rth4jqeVPlTn8eUTD7tq6jotHSW_kKL-HZCjsdmxH1akZ00CAYqMDY0I5jaBDNaLxntL3vMJzbf1gzzw4JCpBv3eq18qm9pnFEqzWbc2M4DLEkAQPtudx4K55rnrViftwwCI0hgePjb76bN4L0YXEiYK_L9ehuFiEaHdk5u5YZkj7rHTBFbSANHTsF6eazw5Shr9Cx3oGLY-o4HFlp1bLd8V2EPH_rZml-5AGFHTdgaPulQSaqa39spxmsrHEJJF_0po5aBc2nZAsyoyE6e0Ih-FzoPjlwJkuoZzb1DVP8OD9z4DU8r5r9dU8s6HoosP2KEmBZ9XvjYyhtvlxX3tb-LgGw=s32-c';
	return (
		<Card style={{ maxWidth: '300px' }}>
			<CardHeader
				avatar={<Avatar alt={user} src={TEMP_DEV_PHOTO} />}
				action={
					<div>
						{' '}
						<IconButton
							aria-label='edit comment'
							aria-describedby={id}
							onClick={handleClick}
						>
							<MoreVertIcon />
						</IconButton>
						<Popover
							id={id}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
						>
							<EditIcon /> Edit
							<Button onClick={deleteComment}>
								<DeleteIcon /> Delete
							</Button>
						</Popover>
					</div>
				}
				title={props.user}
			/>
			<CardContent>{props.comment}</CardContent>
		</Card>
	);
}
