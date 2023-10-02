import React, { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import anims from '../../animations';
import './ProjectsPage.scss';
import ImageTrack from './ImageTrack/ImageTrack';
import { useNavigate } from 'react-router';
import CloseButton from '../../Components/CloseButton/CloseButton';
import { DefaultPageTransition } from '../../transitions';

type Props = {};

function ProjectsPage() {
	const navigate = useNavigate();

	return (
		<motion.div
			className={'projects'}
			variants={anims.sectionContentAnim}
			initial='initial'
			animate={'animate'}
			key='projects'
			layoutId='project_background'>
			<CloseButton callback={() => navigate('/')} />
			<ImageTrack />
		</motion.div>
	);
}

export default () => DefaultPageTransition(ProjectsPage);
