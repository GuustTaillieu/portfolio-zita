import { useState } from 'react';
import { DefaultPageTransition } from '../../transitions';
import './HomePage.scss';
import ScrollNav from '../../Components/ScrollNav/ScrollNav';
import SectionContent from '../../Components/SectionContent/SectionContent';
import HomeState from '../../hooks/useHomeState';

export type ControlProps = {
	scrollPosition: number;
	setScrollPosition?: (scrollPosition: number) => void;
};

const HomePage = () => {
	return (
		<div className='home'>
			<HomeState>
				<HomeContent />
			</HomeState>
		</div>
	);
};

const HomeContent = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	return (
		<>
			<SectionContent scrollPosition={scrollPosition} />
			<ScrollNav
				scrollPosition={scrollPosition}
				setScrollPosition={setScrollPosition}
			/>
		</>
	);
};

export default () => DefaultPageTransition(HomePage);
