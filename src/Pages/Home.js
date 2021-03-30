import React from 'react';
import HeroSectionArea from '../Components/HeroSectionArea';
import { ExperiencesTotalText } from '../Components/Experiences';
import FirstCoop from '../Components/ExperiencesFolder/FirstCoop';
import SecondCoop from '../Components/ExperiencesFolder/SecondCoop';
import ParentExperinceClass from '../Components/ParentExperinceClass';
import SkillsPage from '../Components/SkillsPage';
import SkillsFullPage from './SkillsFullPage';
import '../ComponentsCSS/OverallCSS.css';
function Home() {
	return (
		<div>
			<HeroSectionArea />
			<br />
			<div>
				{/* <SkillsPage /> */}
				<SkillsFullPage />
				{ExperiencesTotalText()}

				<SecondCoop />
				<FirstCoop />
			</div>
		</div>
	);
}

export default Home;
