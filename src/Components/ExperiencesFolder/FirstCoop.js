import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import '../../ComponentsCSS/OverallCSS.css';

import ParentExperinceClass from '../ParentExperinceClass';

let firstCoopDetails = [
	'	Reported directly to CTO to develop functional product requirements, by assessment of client needs',
	'	Developed value propositions of feature requests through the analysis of user experience and needs',
	'	Designed M.V.P, to gather early user feedback, which resulted in increased user adoption by 30%',
];

let value = ' TECHNICAL PRODUCT MANAGER | ZENDUIT| DEC 2018 - MAY 2019';
function FirstCoop() {
	let component = <div>{ParentExperinceClass(firstCoopDetails, value)}</div>;
	return <div>{component}</div>;
}

function FirstCoopOne() {
	let listComponent = [];

	for (let i = 0; i < firstCoopDetails.length; i++) {
		listComponent.push(
			<div>
				<li>Hello</li>
			</div>
		);
	}

	return listComponent;
}

export default FirstCoop;
