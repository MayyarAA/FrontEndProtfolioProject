import React from 'react';
import SkillsPage from '../SkillsPage';
import reactImage from '../../Pictures/javaImage.jpg';
export default function JavaSkillComponent() {
	let skillname = 'Java';
	let dscr = 'Object Oriented & Multithreading skills';
	let img = reactImage;
	let fullDetail =
		'My original programming language, developed the fundementails skills of Object Oriented Programming. Extensive experience in data structures & algorthims';
	let component = <div>{SkillsPage(skillname, dscr, img, fullDetail)}</div>;
	// SkillsPage();
	return <div> {component}</div>;
}
