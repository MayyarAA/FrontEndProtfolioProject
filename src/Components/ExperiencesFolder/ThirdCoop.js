import React from 'react';
import ParentExperinceClass from '../ParentExperinceClass';
let firstCoopDetails = [
	'	Shipped two full-stack web applications using React, Express, Node, and hosted on Azure  ',
	'Developed Responsive Web App utilizing React-Virtualized Functional Components, Hooks API ',
	'Released social networking skills web app, resulting in a 40% increase in employee engagement',
	'Built production ready REST API Endpoints utilizing Express, with Access tokens in API headers ',
	'Designed database schema, and subsequently developed and launched an Azure SQL database  ',
];

let value =
	' FULL-STACK SOFTWARE ENGINEER| MANULIFE FINANCIAL| SEP 2019-JAN 2020 | WATERLOO';
function ThirdCoop() {
	let component = <div>{ParentExperinceClass(firstCoopDetails, value)}</div>;
	return <div>{component}</div>;
}

export default ThirdCoop;
