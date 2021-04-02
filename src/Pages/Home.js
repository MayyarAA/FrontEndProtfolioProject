import React from 'react';
import HeroSectionArea from '../Components/HeroSectionArea';
import FirstCoop from '../Components/ExperiencesFolder/FirstCoop';
import FooterComponent from '../Components/FooterComponent';
import ParentExperinceClass from '../Components/ParentExperinceClass';
import { ToolbarComponent } from '../Components/Toolbar';
import SkillsFullPage from './SkillsFullPage';
import '../ComponentsCSS/OverallCSS.css';
import ExperienceFullPage from './ExperienceFullPage';
import { Grid, Typography } from '@material-ui/core';
function Home() {
	return (
		<div>
			<ToolbarComponent />
			{/* <Grid container justify='center'> */}
			<HeroSectionArea />
			{/* </Grid> */}
			<br />
			<div>
				<br />
				<Typography variant='h2' color='textPrimary' component='p'>
					Skills
				</Typography>
				<Grid container justify='center'>
					<SkillsFullPage />
				</Grid>
				<ExperienceFullPage />
				<FooterComponent />
			</div>
		</div>
	);
}

export default Home;
