import React from 'react';
import SkillsPage from '../SkillsPage';
import reactImage from '../../Pictures/nodeImage.png';
export default function NodeSkillComponent() {
	let skillname = 'Node.js';
	let dscr = 'Extensive background in I/O purposes';
	let img = reactImage;
	let fullDetail =
		'Worked with node for most of my web application projects, it is my personal choice for Input/Outpu(I/O) intensive web applications.';

	let component = <div>{SkillsPage(skillname, dscr, img, fullDetail)}</div>;
	// SkillsPage();
	return <div> {component}</div>;
}
