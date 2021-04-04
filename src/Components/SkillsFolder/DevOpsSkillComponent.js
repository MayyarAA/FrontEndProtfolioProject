import React from 'react';
import dockerImage from '../../Pictures/dockerImage.png';
import SkillsPage from '../SkillsPage';
function DevOpsSkillComponent() {
	let skillname = 'Docker';
	let dscr = 'Utilized containers for microservice development & deployment';

	let fullDetail =
		'Produced stable isolated environments for development & production. Ensuring dependencies are consistent across environments. ';
	let component = (
		<div>{SkillsPage(skillname, dscr, dockerImage, fullDetail)}</div>
	);

	return <div>{component}</div>;
}

export default DevOpsSkillComponent;
