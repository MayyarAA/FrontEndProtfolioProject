import React from 'react';
import HeroSectionArea from '../Components/HeroSectionArea';
import { ExperiencesTotalText } from '../Components/Experiences';
function Home() {
	return (
		<div>
			<HeroSectionArea />
			{ExperiencesTotalText()}
		</div>
	);
}

export default Home;
