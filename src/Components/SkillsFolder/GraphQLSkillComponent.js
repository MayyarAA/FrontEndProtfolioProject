import React from 'react';
import SkillsPage from '../SkillsPage';
import reactImage from '../../Pictures/graphql.png';
export default function MongoSkillComponent() {
	let skillname = 'GraphQL';
	let dscr = 'Query based API schema';
	let img = reactImage;
	let fullDetail =
		'Built scalable server side GraphQL Query and Mutation definitions with custom dynamic resolver functions. Key focus on Auth.';
	let component = <div>{SkillsPage(skillname, dscr, img, fullDetail)}</div>;
	// SkillsPage();
	return <div> {component}</div>;
}
