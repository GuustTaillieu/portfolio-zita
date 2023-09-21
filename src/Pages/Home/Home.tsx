import { motion } from 'framer-motion';
import { useState } from 'react';
import { DefaultPageTransition } from '../../transitions';
import './Home.scss';
import ScrollNav from '../../Components/ScrollNav/ScrollNav';
import SectionContent from '../../Components/SectionContent/SectionContent';

export type ControlProps = {
	isDocked: boolean;
	setIsDocked?: (isDocked: boolean) => void;
	scrollPosition: number;
	setScrollPosition?: (scrollPosition: number) => void;
};

type Props = {};

const Home = (props: Props) => {
	const [isDocked, setIsDocked] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	return (
		<DefaultPageTransition>
			<div className='home'>
				<ScrollNav
					isDocked={isDocked}
					setIsDocked={setIsDocked}
					scrollPosition={scrollPosition}
					setScrollPosition={setScrollPosition}
				/>
				<SectionContent
					isDocked={isDocked}
					scrollPosition={scrollPosition}
				/>
			</div>
		</DefaultPageTransition>
	);
};

export default Home;
