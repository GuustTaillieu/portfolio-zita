import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ControlProps } from '../../Pages/Home/Home';
import SCROLL_NAV_ITEMS from '../ScrollNav/scroll-nav-info';
import Aboutme from '../../Sections/Aboutme/Aboutme';
import Projects from '../../Sections/Projects/Projects';
import Skills from '../../Sections/Skills/Skills';
import Experience from '../../Sections/Experience/Experience';
import anims from '../../animations';
import './SectionContent.scss';

export type ContentProps = {
	showContent: boolean;
};

const SectionContent = ({ isDocked, scrollPosition }: ControlProps) => {
	const [currentNavItem, setCurrentNavItem] = useState(SCROLL_NAV_ITEMS[0]);
	const [showContent, setShowContent] = useState(true);

	useEffect(() => {
		setShowContent(false);
		setTimeout(() => {
			const component = getComponent(scrollPosition);
			setCurrentNavItem(component);
			setShowContent(true);
		}, anims.sectionContentAnim.animate.transition.duration * 1000);
	}, [scrollPosition]);

	return (
		<motion.div
			className='section_content'
			variants={anims.sectionContentAnim}
			initial='initial'
			animate={isDocked ? 'animate' : 'initial'}
			transition={{
				duration: anims.sectionContentAnim.animate.transition.duration,
				ease: anims.sectionContentAnim.animate.transition.ease,
			}}>
			{currentNavItem.component({ showContent })}
		</motion.div>
	);
};

function getComponent(scrollPosition: number) {
	const numItems = SCROLL_NAV_ITEMS.length;
	const sectionIndex = ((scrollPosition % numItems) + numItems) % numItems;
	const component = SCROLL_NAV_ITEMS.find(
		(item) => item.scrollPosition === sectionIndex
	)!;
	return component;
}

export default SectionContent;
