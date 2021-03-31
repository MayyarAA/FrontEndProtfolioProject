import React from 'react';
import FirstCoop from '../Components/ExperiencesFolder/FirstCoop';
import SecondCoop from '../Components/ExperiencesFolder/SecondCoop';
import ExperiencesTotalText from '../Components/Experiences';
import { Box } from '@material-ui/core';
import FifthCoop from '../Components/ExperiencesFolder/FifthCoop';
import FourthCoop from '../Components/ExperiencesFolder/FourthCoop';
import ThirdCoop from '../Components/ExperiencesFolder/ThirdCoop';
function ExperienceFullPage() {
	return (
		<div>
			<Box>
				<ExperiencesTotalText />
			</Box>
			<Box boxShadow={2}>
				<br />
				<FifthCoop />
			</Box>
			<Box boxShadow={2}>
				<br />
				<FourthCoop />
			</Box>
			<Box boxShadow={2}>
				<br />
				<ThirdCoop />
			</Box>
			<Box boxShadow={2}>
				<br />
				<SecondCoop />
			</Box>
			<Box boxShadow={2}>
				<br />
				<FirstCoop />
			</Box>
		</div>
	);
}

export default ExperienceFullPage;
