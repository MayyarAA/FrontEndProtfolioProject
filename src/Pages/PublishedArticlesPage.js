import { Typography } from '@material-ui/core';
import ProductArticleOne from '../Components/PublishedArticles/ProductArticleOne.js';
import OAuthArticleOne from '../Components/PublishedArticles/OAuthArticleOne.js';
import { Grid, Box } from '@material-ui/core';
export default function PublishedArticlesPage() {
	let headerPubblishedArticlesPage = (
		<div className='centerAboutText'>
			<Typography variant='h2' color='textPrimary' component='p' justify='center'>
				Published Articles
			</Typography>
		</div>
	);
	return (
		<div>
			<div>{headerPubblishedArticlesPage}</div>
			<br />
			<Box>
				<Box boxShadow={2}>
					<br />
					<ProductArticleOne />
				</Box>
				<br />
				<Box boxShadow={2}>
					<br />
					<OAuthArticleOne />
				</Box>
			</Box>
			<div></div>
			<div></div>
		</div>
	);
}
