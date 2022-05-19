import React from 'react';
import ParentExperinceClass from '../ParentExperinceClass';
import Experince from '../../StaticFiles/Experience.json';
let firstCoopDetails = [
	'Shipped two full-stack web applications using React, Express, Node, and hosted on Azure  ',
	'Developed Progressive Web Applications utilizing Functional Components and Hooks API in React',
	'Released social networking skills web app, resulting in a 40% increase in employee engagement',
	'Built production ready REST API Endpoints utilizing Express, with Access tokens in API headers ',
	'Designed database schema, and subsequently developed and launched an Azure SQL database ',
];

let value = 'FULL-STACK SOFTWARE ENGINEER| MANULIFE FINANCIAL| SEP 2019-JAN 2020';

function SecondCoop() {
	let secondCoopHeader = Experince.ExperienceFull.ExperienceHeader[0].FirstCoopHeader;
	// Experince.ExperienceFull.ExperienceHeader.SecondCoopHeader.value;
	let component = <div>{ParentExperinceClass(firstCoopDetails, value)}</div>;
	return <div>{component}</div>;
}

export default SecondCoop;
