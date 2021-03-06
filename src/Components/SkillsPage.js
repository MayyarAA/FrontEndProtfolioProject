import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import reactImage from '../Pictures/reactImage.jpg';
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

export default function SkillsPage(skillname, dscr, img, fullDetail) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div>
			<Card className={classes.root}>
				<CardHeader title={skillname} subheader={dscr} />
				<CardMedia className={classes.media} image={img} title={skillname} />

				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>{/* <ShareIcon /> */}</IconButton>
				</CardActions>
				{/* <Collapse in={expanded} timeout='auto' unmountOnExit> */}
				<CardContent>
					<Typography variant='h6' color='textSecondary' component='p'>
						{fullDetail}
					</Typography>
				</CardContent>
				{/* </Collapse> */}
			</Card>
		</div>
	);
}
