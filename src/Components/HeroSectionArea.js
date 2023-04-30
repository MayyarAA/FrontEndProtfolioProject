import React, { useState, useEffect } from 'react';
import '../ComponentsCSS/HeroSectionArea.css';
import Typed from 'react-typed';
import { Grid } from '@material-ui/core';
let typedStrings = [
	'Nice to meet you,',
	'Welcome to my personal site built by me',
];

function HeroSectionArea() {
	const [emojiState, setEmojiState] = useState();
	let counterFunction = () => {
		return false;
	};

	// useEffect(() => {
	// 	setEmojiState(false);
	// }, []);
	//setInterval(setEmojiState(), 80);
	let timerValue = 10;

	if (timerValue == 10) {
	}

	return (
		<div className='HeroContainer'>
			<div className='heroContainerH1'>
				<h1>Mayyar Al-Atari</h1>
				<div className='heroContainerH4'>
					<h4>Creating the Solutions of Tomorrow  </h4>
					<Grid container>
						<Grid item>
							<div className='heroTypedElement'>
								<Typed
									strings={typedStrings}
									typeSpeed={80}
									backDelay={1100}
									backSpeed={30}
									loop
								/>
							</div>
						</Grid>
						<Grid item>
							<div className='heroTypedElement'>
								<span role='img' aria-label='sheep'>
									{emojiState ? '😀' : ''}
								</span>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}

export default HeroSectionArea;
