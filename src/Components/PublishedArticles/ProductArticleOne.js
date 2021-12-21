import React from 'react';
import ParentPublishedArticles from '../ParentPublishedArticles';
let productv1articlebody =
	'Whether you are a UX Engineer, Product Owner, or Software Developer. Understanding the why for your every unit of effort, energy, thought, and countless hours of work is of the utmost importance to increasing your products competitiveness in the market place.';

let productv1articleheader = 'The Importance of User Focused Product Development';
let linkValue =
	'https://mayyaralatari.medium.com/the-importance-of-user-focused-product-development-cff5461dc9d9';
function ProductArticleOne() {
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

export default ProductArticleOne;
