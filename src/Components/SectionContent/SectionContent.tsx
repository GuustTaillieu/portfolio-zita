import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useSection from '../../hooks/useSection';
import './SectionContent.scss';
import anims from '../../animations';

const item = {
	initial: { opacity: 0, y: 100 },
	animate: { opacity: 1, y: 0 },
};

type Props = {
	show: boolean;
};

const SectionContent = ({ show }: Props) => {
	const { currentSectionTitle } = useSection();
	const [showContent, setShowContent] = useState(show);
	const [title, setTitle] = useState(currentSectionTitle);

	useEffect(() => {
		if (!showContent) return;
		setShowContent(false);
		setTimeout(() => {
			setTitle(currentSectionTitle);
			setShowContent(true);
		}, 500);
	}, [currentSectionTitle]);

	useEffect(() => {
		setShowContent(show);
	}, [show]);

	return (
		<motion.div
			className='section_content'
			variants={anims.sectionContentAnim}
			initial='initial'
			animate={!show ? 'exit' : showContent ? 'animate' : 'initial'}
			key='section_content'
			style={{ pointerEvents: showContent ? 'all' : 'none' }}>
			<motion.div className='content'>
				<motion.h3 variants={item}>{title}</motion.h3>
				<motion.p variants={item}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Iusto consequuntur eveniet commodi laudantium, nam porro
					voluptatem nemo cum fugiat. Sunt, ipsum! Provident voluptas
					nesciunt, voluptatum nostrum illo sit consectetur aliquid.
				</motion.p>
			</motion.div>
		</motion.div>
	);
};

export default SectionContent;
