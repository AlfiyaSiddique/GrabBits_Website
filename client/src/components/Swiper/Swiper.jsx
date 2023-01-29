import React, { useState } from 'react';
import classes from './Swiper.module.css';

const Swiper = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const updateSlide = (direction) => {
		if (direction === 'next' && currentSlide < 2) {
			setCurrentSlide(currentSlide + 1);
		} else if (direction === 'prev' && currentSlide > 0) {
			setCurrentSlide(currentSlide - 1);
		}
	};

	return (
		<div className={classes.swiper}>
			<div
				className={classes.slide}
				style={{
					position: 'absolute',
					left: currentSlide === 0 ? 0 : '300%',
					transition: 'left 1s ease-in-out',
				}}
			>
				Slide 1
			</div>
			<div
				className={classes.slide}
				style={{
					position: 'absolute',
					left: currentSlide === 1 ? 0 : '300%',
					transition: 'left 1s ease-in-out',
				}}
			>
				Slide 2
			</div>
			<div
				className={classes.slide}
				style={{
					position: 'absolute',
					left: currentSlide === 2 ? 0 : '300%',
					transition: 'left 1s ease-in-out',
				}}
			>
				Slide 3
			</div>
			<button onClick={() => updateSlide('prev')}>Previous</button>
			<button onClick={() => updateSlide('next')}>Next</button>
		</div>
	);
};

export default Swiper;
