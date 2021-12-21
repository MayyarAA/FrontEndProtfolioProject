import React from 'react';
import {
	Typography,
	Card,
	Avatar,
	CardActionArea,
	CardMedia,
	Box,
	Grid,
	Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../ComponentsCSS/OverallCSS.css';
import SkillsPage from '../Components/SkillsPage';
import imgCharity from '../Pictures/globalCitizenImg.png';
import imgPainting from '../Pictures/favPainting.jpeg';
import imgTwo from '../Pictures/linkedInImagetwo.png';
let aboutString =
	'Innovative Full-stack developer with a focus on Application Security in cloud native environments.  Enterprise  developer experience in Web Applications, DevOps, Cloud Computing, Identity Provider Services';

let charityString =
	' Global Citizen is an international advocacy organization working to end poverty across the globe. The charity focuses on empowering engaged citizens who use their collective voices and influence to build solutions for extreme poverty	';

function AboutComponent() {
	let header = (
		<div className='centerAboutText'>
			<Typography variant='h2' color='textPrimary' component='p' justify='center'>
				About Me
			</Typography>
		</div>
	);

	let headerDescr = (
		<div className='centerAboutText'>
			<Typography variant='h4' color='textPrimary' component='p' justify='center'>
				Technical Summary
			</Typography>
		</div>
	);

	let aboutComponent = (
		<div className='centerAboutText'>
			<Typography variant='h4' color='textSecondary' component='p'>
				{aboutString}
			</Typography>
		</div>
	);

	let aboutMeImgDesc = (
		<div className='container'>
			<a href='https://www.linkedin.com/in/mayyar-al-atari-64b76b112'>
				<Box boxShadow={2}>
					{headerDescr}
					<br />
					<div className='aboutCenter'>
						<div>
							<img src={imgTwo}></img>
						</div>
						<div>{aboutComponent}</div>
					</div>
				</Box>
			</a>
		</div>
	);

	let favCharityComponent = (
		<div>
			<Box boxShadow={2}>
				<div className='centerAboutText'>
					<Typography variant='h4' color='textPrimary' component='p' justify='center'>
						Favourite Charity
					</Typography>
				</div>
				<br />
				{/* <div className='aboutCenter'> */}
				<div>
					<div>
						<img src={imgCharity}></img>
					</div>
					<Typography variant='h4' color='textSecondary' component='p'>
						{charityString}
					</Typography>
				</div>
			</Box>
		</div>
	);

	let favPaintingComponent = (
		<div>
			<Box boxShadow={2}>
				<div className='centerAboutText'>
					<Typography variant='h4' color='textPrimary' component='p' justify='center'>
						Intriguing Painting
					</Typography>
				</div>
				<br />
				<div className='aboutCenter'>
					<div>
						{/* <Container> */}
						<img src={imgPainting} width='220' height='200'></img>
						{/* </Container> */}
					</div>
					<Typography variant='h4' color='textSecondary' component='p'>
						{/* {charityString} */}
					</Typography>
				</div>
			</Box>
		</div>
	);
	let fullPageComponent = (
		<Grid container>
			<Grid>{aboutMeImgDesc}</Grid>
			{/* <Grid item xs={4}>
				{favPaintingComponent}
			</Grid> */}
			{/* <Grid item xs={6}>
					{' '}
					{favCharityComponent}
				</Grid> */}
		</Grid>
	);
	return (
		<div className='aboutCenter'>
			{header}
			<br />
			{aboutMeImgDesc}
		</div>
	);
}

export default AboutComponent;
