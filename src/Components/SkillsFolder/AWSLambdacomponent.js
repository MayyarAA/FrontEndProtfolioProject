import React from 'react';
import SkillsPage from '../SkillsPage';
import reactImage from '../../Pictures/awslambda.png';
export default function MongoSkillComponent() {
	let skillname = 'AWS Lambda';
	let dscr = 'Scalable Cloud Native Serverless Infrastructure';
	let img = reactImage;
	let fullDetail =
		'Worked on producing scalable and secure serverless API endpoints running on AWS Lambda, to allow for improved performance.';
	let component = <div>{SkillsPage(skillname, dscr, img, fullDetail)}</div>;
	// SkillsPage();
	return <div> {component}</div>;
}
