import React from 'react';
import ParentExperinceClass from '../ParentExperinceClass';
let amazonWorkDetails = [
	'Worked in an Event Driven Architecture for inventory events of all amazon stores globally, with 2000-4000 TPS  ',
	'Designed & Implemented Java based RPC Protocol Buffer APIs with pagination, resulting in sub 125ms latency',
	'Developed core API & DAO for Multi-part File Upload, used by 7 services for Read/Write to Persistent Data Store',
	'Programmed optimistic locking mechanism for accessing S3 objects, allowing for safe-parallel processing',
    'Constructed AWS services using TypeScript CDK for AWS Lambda & DynamoDB, reducing cloud costs by 25%',
	'Worked on ensuring Idempotency for Event Driven Services with Continuous Deployment, for safe event re-drives',
];

let value = 'SOFTWARE ENGINEER | AMAZON | SEP 2022 - CURRENT';
function AmazonWork() {
	let component = <div>{ParentExperinceClass(amazonWorkDetails, value)}</div>;
	return <div>{component}</div>;
}

export default AmazonWork;
