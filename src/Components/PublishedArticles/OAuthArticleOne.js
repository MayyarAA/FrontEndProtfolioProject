import React from 'react';
import ParentPublishedArticles from '../ParentPublishedArticles';
let productv1articlebody =
	'OAuth 2.0 & OIDC ensure that users logged into web applications only see data that belongs to them and that users can only execute application features they are authorized to use. This is also how most SSO features function.';

let productv1articleheader = 'Intro to OAuth 2.0 & OIDC';
let linkValue = 'https://mayyaralatari.medium.com/oauth-2-0-oidc-in-5-minutes-c4d017efaa85';
function OAuthArticleOne() {
	let component = (
		<div>
			{ParentPublishedArticles(
				productv1articleheader,
				productv1articlebody,
				linkValue,
				'here'
			)}
		</div>
	);
	return <div>{component}</div>;
}

export default OAuthArticleOne;
