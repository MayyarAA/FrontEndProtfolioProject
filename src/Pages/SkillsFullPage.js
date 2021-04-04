import React from 'react';
import CSharpSkillsComponenet from '../Components/SkillsFolder/CSharpSkillComponent';
import JavaSkillComponent from '../Components/SkillsFolder/JavaSkillComponent';
import JavaScriptReactSkillComponent from '../Components/SkillsFolder/JavaScriptReactSkillComponent';
import { Grid, Box } from '@material-ui/core';
import MongoSkillComponent from '../Components/SkillsFolder/MongoSkillComponent';
import NodeSkillComponent from '../Components/SkillsFolder/NodeSkillComponent';
import DevOpsSkillComponent from '../Components/SkillsFolder/DevOpsSkillComponent';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'left',
		fontFamily: 'Cambria',
		color: '',
	},
	icon: {
		fontSize: 25,
	},
}));
export default function SkillsFullPage() {
	const classes = useStyles();
	let cSharpcomponent = CSharpSkillsComponenet();
	let javaScriptReactSkillComponent = JavaScriptReactSkillComponent();
	let javaSkillComponent = JavaSkillComponent();
	let mongoSkillComponent = MongoSkillComponent();
	let nodeSkillComponent = NodeSkillComponent();
	let devOpsSkillComponent = DevOpsSkillComponent();
	return (
		<div>
			{/* <Box boxShadow={2} mx='auto'> */}
			<div className='centerAboutText'>
				<Typography
					variant='h2'
					color='textPrimary'
					component='p'
					justify='center'>
					Technical Skills
				</Typography>
			</div>
			<Grid
				container
				// direction='column'
				alignItems='center'
				justify='center'
				style={{ minHeight: '100vh' }}
				spacing={4}>
				<Grid item></Grid>
				<Grid item> {javaScriptReactSkillComponent}</Grid>
				<Grid item>{cSharpcomponent}</Grid>
				<Grid item>{javaSkillComponent}</Grid>
				<Grid item>{nodeSkillComponent} </Grid>
				<Grid item>{mongoSkillComponent}</Grid>
				<Grid item> {devOpsSkillComponent}</Grid>
			</Grid>
			{/* </Box> */}
		</div>
	);
}
