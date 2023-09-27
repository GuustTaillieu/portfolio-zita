import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { DefaultPageTransition } from '../../transitions';
import './Home.scss';
import ScrollNav from '../../Components/ScrollNav/ScrollNav';
import SectionContent from '../../Components/SectionContent/SectionContent';
import HomeState, { useHomeState } from '../../hooks/useHomeState';
import Project from '../Project/Project';
import anims from '../../animations';

export type ControlProps = {
	scrollPosition: number;
	setScrollPosition?: (scrollPosition: number) => void;
};

type Props = {};

const Home = (props: Props) => {
	return (
		<DefaultPageTransition>
			<div className='home'>
				<HomeState>
					<HomeContent />
				</HomeState>
			</div>
		</DefaultPageTransition>
	);
};

const HomeContent = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const { projectToShow, setProjectToShow } = useHomeState();
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		setProjectToShow(null);
	}, []);

	useEffect(() => {
		setShowContent(false);
		if (projectToShow === null) return;
		setShowContent(false);
		setTimeout(() => {
			setShowContent(true);
		}, anims.sectionContentAnim.animate.transition.duration * 1000);
	}, [projectToShow]);

	return (
		<>
			{showContent ? (
				<Project id={projectToShow} />
			) : (
				<>
					<ScrollNav
						scrollPosition={scrollPosition}
						setScrollPosition={setScrollPosition}
					/>
					<SectionContent scrollPosition={scrollPosition} />
				</>
			)}
		</>
	);
};

export default Home;
