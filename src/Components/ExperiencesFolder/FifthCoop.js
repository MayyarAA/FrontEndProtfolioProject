import React from 'react';
import ParentExperinceClass from '../ParentExperinceClass';
let firstCoopDetails = [
	'	Worked on Architecture Security team responsible for establishing and building security features ',
	'    Built enterprise identity microservice implementing Identity Server 4 utilizing OAuth2 & OIDC',
	'Developed MultiFactor Authentication functionality for user base of 1,000,000+ utilizing Twilio ',
	'Developed POC Endpoint Detection Tool, utilizing C# compiler Roslyn for automated API security ',
	'Worked on static analysis using VeraCode to identify & resolve vulnerabilities in production code',
];
let value =
	'CYBERSECURITY SOFTWARE ENGINEER | CERIDIAN | DEC 2020-MAR 2020 | REMOTE WORK  ';
function FifthCoop() {
	let component = <div>{ParentExperinceClass(firstCoopDetails, value)}</div>;
	return <div>{component}</div>;
}

export default FifthCoop;
