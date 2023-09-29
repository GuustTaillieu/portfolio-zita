import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ControlProps } from '../../Pages/HomePage/HomePage';
import SCROLL_NAV_ITEMS from '../ScrollNav/scroll-nav-info';
import anims from '../../animations';
import './SectionContent.scss';
import { useHomeState } from '../../hooks/useHomeState';

export type ContentProps = {
	showContent: boolean;
};

const SectionContent = ({ scrollPosition }: ControlProps) => {
	const [currentNavItem, setCurrentNavItem] = useState(SCROLL_NAV_ITEMS[0]);
	const [showContent, setShowContent] = useState(true);
	const { isDocked } = useHomeState();

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
			className={'section_content' + (isDocked ? ' docked' : '')}
			variants={anims.sectionContentAnim}
			initial='initial'
			animate={isDocked ? 'animate' : 'initial'}
			transition={{
				duration: anims.sectionContentAnim.animate.transition.duration,
				ease: anims.sectionContentAnim.animate.transition.ease,
			}}>
			<div className='filler'></div>
			<currentNavItem.component
				showContent={showContent}
				key={currentNavItem.title}
			/>
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
