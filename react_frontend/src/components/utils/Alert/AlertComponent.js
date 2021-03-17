// React
import React, { useState } from 'react';
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		// marginTop: '3em',
		// '& > *': {
		// margin: theme.spacing(1),
		// },
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
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			key={`${id}_${new Date().getTime() / 1000 + new Date().getTime() / 1000}`}
			className={classes.root}
		>
			<DialogTitle
				color={alertType}
				id={`alert-${alertType}`}
				key={`${id}_${alertType}_left`}
			>
				<Typography color="inherit" key={`${id}_${alertType}_left-text`}>
					{`${alertType[0].toUpperCase() + alertType.substring(1)}`}
				</Typography>
			</DialogTitle>

			<DialogContent
				id={`dialog-${alertType}`}
				key={`${id}_${alertType}_right`}
			>
				<Typography color="inherit" key={`${id}_${alertType}_$right-text`}>
					{`${msg[0].toUpperCase() + msg.substring(1)}`}
				</Typography>
			</DialogContent>
			<DialogActions key={`${id}_${alertType}_button-menu`}>
				<Button
					onClick={handleClose}
					variant="contained"
					color="primary"
					key={`${id}_${alertType}_button`}
				>
					Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default AlertComponent;
