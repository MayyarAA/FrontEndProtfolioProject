import React from 'react';
import ParentExperinceClass from '../ParentExperinceClass';

let firstCoopDetails = [
	' Designed, planned, and developed a full stack application in React, Node, and ASP.NET Core ',
	'Demoed React app for Dayforce on live web event to user base of 900, then implemented feedback',
	'Built & configured build and release pipeline for project on Azure for quick & secure product release',
	'Developed custom Smart Search functionality with infinite loading utilizing Open-source libraries ',
	'	Utilized Test Driven Development to integrate automated unit testing & E2E testing in CI/CD pipeline',
];

let value =
	' FULL-STACK SOFTWARE ENGINEER | CERIDIAN | APR 2020-SEP 2020 | REMOTE WORK  ';
function FourthCoop() {
	let component = <div>{ParentExperinceClass(firstCoopDetails, value)}</div>;
	return <div>{component}</div>;
}

export default FourthCoop;
