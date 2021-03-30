import React from 'react';
import SkillsPage from '../SkillsPage';
import reactImage from '../../Pictures/dotnetCoreimage.png';
export default function CSharpSkillComponent() {
	let skillname = 'C#';
	let dscr = "Enterprise level skill in .NET Core'";
	let img = reactImage;
	let fullDetail =
		'Worked on user facing production code in .NET Core 3.0+ with experienc in automated unit testing framework XUnit tests ';
	let component = <div>{SkillsPage(skillname, dscr, img, fullDetail)}</div>;
	// SkillsPage();
	return <div> {component}</div>;
}
