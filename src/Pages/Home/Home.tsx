import { motion } from 'framer-motion';
import { useState } from 'react';
import { DefaultPageTransition } from '../../transitions';
import './Home.scss';
import ScrollNav from '../../Components/ScrollNav/ScrollNav';
import SectionContent from '../../Components/SectionContent/SectionContent';
import HomeState from '../../hooks/useHomeState';

export type ControlProps = {
	scrollPosition: number;
	setScrollPosition?: (scrollPosition: number) => void;
};

type Props = {};

const Home = (props: Props) => {
	const [scrollPosition, setScrollPosition] = useState(0);

	return (
		<DefaultPageTransition>
			<div className='home'>
				<HomeState>
					<ScrollNav
						scrollPosition={scrollPosition}
						setScrollPosition={setScrollPosition}
					/>
					<SectionContent scrollPosition={scrollPosition} />
				</HomeState>
			</div>
		</DefaultPageTransition>
	);
};

export default Home;
