import React from 'react';
import CSharpSkillsComponenet from '../Components/SkillsFolder/CSharpSkillComponent';
import JavaSkillComponent from '../Components/SkillsFolder/JavaSkillComponent';
import JavaScriptReactSkillComponent from '../Components/SkillsFolder/JavaScriptReactSkillComponent';
import { Grid } from '@material-ui/core';
import MongoSkillComponent from '../Components/SkillsFolder/MongoSkillComponent';
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
	return (
		<div>
			<Grid container spacing={4}>
				<Grid item> {javaScriptReactSkillComponent}</Grid>
				<Grid item>{cSharpcomponent}</Grid>
				<Grid item>{javaSkillComponent}</Grid>
				{/* <Grid item>{mongoSkillComponent}</Grid> */}
			</Grid>
		</div>
	);
}
