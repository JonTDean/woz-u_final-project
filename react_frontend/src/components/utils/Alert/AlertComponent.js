// React
import React, { useState } from 'react';
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '3em',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

// Pops up as a Modal
// TODO:
// DONE --- I need to basically fix its display.
// Having it interact with the positioning of
// the other elements is annoying. Maybe I can
// make a class that has has an important declarator.
function AlertComponent({ alert: { alertType, msg, id } }) {
	const classes = useStyles();
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root} key={id}>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id={`alert-${alertType}`}>{`${
					alertType[0].toUpperCase() + alertType.substring(1)
				}`}</DialogTitle>
				<DialogContent id={`dialog-${alertType}`}>
					<DialogContentText id={`dialog-text-${alertType}`}>
						{`${msg[0].toUpperCase() + msg.substring(1)}`}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} variant="contained" color="primary">
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default AlertComponent;
