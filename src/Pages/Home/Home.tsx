import { motion } from 'framer-motion';
import { useState } from 'react';
import { DefaultPageTransition } from '../../transitions';
import './Home.scss';
import ScrollNav from '../../Components/ScrollNav/ScrollNav';
import { SectionProvider } from '../../hooks/useSection';
import SectionContent from '../../Components/SectionContent/SectionContent';

type Props = {};

const Home = (props: Props) => {
	const [isDocked, setIsDocked] = useState(false);

	return (
		<DefaultPageTransition>
			<div className='home'>
				<SectionProvider>
					<ScrollNav isDocked={isDocked} setIsDocked={setIsDocked} />
					<SectionContent show={isDocked} />
				</SectionProvider>
			</div>
		</DefaultPageTransition>
	);
};

export default Home;
