import React from 'react';
import HeroSectionArea from '../Components/HeroSectionArea';
import FirstCoop from '../Components/ExperiencesFolder/FirstCoop';
import SecondCoop from '../Components/ExperiencesFolder/SecondCoop';
import ParentExperinceClass from '../Components/ParentExperinceClass';
import SkillsPage from '../Components/SkillsPage';
import SkillsFullPage from './SkillsFullPage';
import '../ComponentsCSS/OverallCSS.css';
import ExperienceFullPage from './ExperienceFullPage';
import { Grid, Typography } from '@material-ui/core';
function Home() {
	return (
		<div>
			{/* <Grid container justify='center'> */}
			<HeroSectionArea />
			{/* </Grid> */}
			<br />
			<div>
				<Typography variant='h2' color='textPrimary' component='p'>
					Skills
				</Typography>
				<Grid container justify='center'>
					<SkillsFullPage />
				</Grid>
				<ExperienceFullPage />
			</div>
		</div>
	);
}

export default Home;
