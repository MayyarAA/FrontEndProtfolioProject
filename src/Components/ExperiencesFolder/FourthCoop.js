import React from 'react';
import ParentExperinceClass from '../ParentExperinceClass';

let firstCoopDetails = [
	' Designed, planned, and developed a full stack application in React, Node, and ASP.NET Core ',
	'Demoed React app for Dayforce on live web event to user base of 900, then implemented feedback',
	'Built & configured build and release pipeline for project on Azure for quick & secure product release',
	'Developed custom Smart Search functionality with infinite loading utilizing Open-source libraries ',
	'Smart Search function used to optimize user queries, leading to a reduction of API response time by 70ms',
];

let value = ' FULL-STACK SOFTWARE ENGINEER | CERIDIAN | APR 2020 - SEP 2020';
function FourthCoop() {
	let component = <div>{ParentExperinceClass(firstCoopDetails, value)}</div>;
	return <div>{component}</div>;
}

export default FourthCoop;
