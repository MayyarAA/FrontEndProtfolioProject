import React from 'react';
import SkillsPage from '../SkillsPage';
import reactImage from '../../Pictures/mongoImage.png';
export default function MongoSkillComponent() {
	let skillname = 'Mongo DB';
	let dscr = 'Scalable Cloud Native Mongo DB Atlas';
	let img = reactImage;
	let fullDetail =
		'Worked on non-relational databases such as  both Mongo DB Atlas and Azure Cosmos. Produced scalable document definitions';
	let component = <div>{SkillsPage(skillname, dscr, img, fullDetail)}</div>;
	// SkillsPage();
	return <div> {component}</div>;
}
