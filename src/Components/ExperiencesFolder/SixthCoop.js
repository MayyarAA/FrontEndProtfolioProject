import React from 'react';
import ParentExperinceClass from '../ParentExperinceClass';
let firstCoopDetails = [
	'Developed logic for optimistic concurrency control of multi-instance read/write to NoSQL DB documents ',
	'Built server-side real-time application utilizing WebSockets, persistent connections, & client affinity',
	'Utilized Test Driven Development with automated unit & E2E testing in CI/CD pipeline, code coverage of 87%',
	'Developed architecture for real-time WebSocket app, reducing tight coupling between server & client-side apps ',
	'Refactored API project in Domain Driven Design application, improving code structure and performance ',
];
let value = 'BACK-END SOFTWARE ENGINEER | REUTERS | Sept 2021 - May 2022';
function FifthCoop() {
	let component = <div>{ParentExperinceClass(firstCoopDetails, value)}</div>;
	return <div>{component}</div>;
}

export default FifthCoop;
