import React from 'react';
import SkillsPage from '../SkillsPage';
import reactImage from '../../Pictures/reactImage.jpg';
export default function JavaScriptReactSkillComponent() {
	let skillname = 'React.js';
	let dscr = 'Production Ready Expertise';
	let img = reactImage;
	let fullDetail =
		'Developed Responsive Web Application for both end user Web Applications and for internal Web Applications.';
	let component = <div>{SkillsPage(skillname, dscr, img, fullDetail)}</div>;
	// SkillsPage();
	return <div> {component}</div>;
}
