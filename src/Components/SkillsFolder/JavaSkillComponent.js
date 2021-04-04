import React from 'react';
import SkillsPage from '../SkillsPage';
import reactImage from '../../Pictures/javaImage.jpg';
export default function JavaSkillComponent() {
	let skillname = 'Java';
	let dscr = 'Object Oriented & Multithreading skills';
	let img = reactImage;
	let fullDetail =
		'Developed the fundementails skills of Object Oriented Programming. Experience in data structures & algorthims';
	let component = <div>{SkillsPage(skillname, dscr, img, fullDetail)}</div>;
	// SkillsPage();
	return <div> {component}</div>;
}
