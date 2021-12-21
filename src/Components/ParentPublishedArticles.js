import { Typography } from '@material-ui/core';
import '../ComponentsCSS/OverallCSS.css';
import { makeStyles } from '@material-ui/core/styles';
export default function ParentPublishedArticles(
	articleTitle,
	articleText,
	articleLink,
	articleImg
) {
	return (
		<div className='container'>
			<a href={articleLink}>
				<ArticleTitleComponent
					articleTitleValue={articleTitle}
					articleLinkValue={articleLink}
				/>
				<br />
				<ArticleBodyComponent articleBodyValue={articleText} />
			</a>
		</div>
	);
}
const useStyles = makeStyles((theme) => ({
	appBar: {
		top: 'auto',
		bottom: 0,
	},
	typo: {
		flexGrow: 1,
		textAlign: 'center',
	},
}));

function ArticleTitleComponent(props) {
	const classes = useStyles();
	let articleTitleComponentHeader = (
		<div className='container'>
			{/* <a href={props.articleLinkValue}> */}
			<Typography className={classes.typo} variant='h4' color='textSecondary' component='p'>
				{props.articleTitleValue}
			</Typography>
			{/* </a> */}
		</div>
	);
	return <div>{articleTitleComponentHeader}</div>;
}

function ArticleBodyComponent(props) {
	const classes = useStyles();
	let articleTitleComponentBody = (
		<Typography className={classes.typo} variant='h5' color='textSecondary' component='p'>
			{props.articleBodyValue}
		</Typography>
	);
	return <div>{articleTitleComponentBody}</div>;
}
