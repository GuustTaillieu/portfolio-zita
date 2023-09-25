import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import './Projects.scss';
import { ContentProps } from '../../Components/SectionContent/SectionContent';
import {
	handleMouseDown,
	handleMouseMove,
	handleMouseUp,
} from './gallery-logic';
import { useHomeState } from '../../hooks/useHomeState';

function Projects({ showContent }: ContentProps) {
	const imageTrackRef = useRef<HTMLDivElement>(null);
	const { setIsDocked } = useHomeState();

	useEffect(() => {
		clearAllDataAttributes(imageTrackRef.current!);
		addRemoveMouseListeners('add', imageTrackRef.current!);

		return () => {
			addRemoveMouseListeners('remove', imageTrackRef.current!);
		};
	}, []);

	return (
		<motion.div
			className='projects'
			variants={anims.sectionContentAnim}
			initial='initial'
			animate={showContent ? 'animate' : 'initial'}
			key='projects'>
			<div className='close-btn' onClick={() => setIsDocked(false)}>
				<motion.div
					className='close-btn__line'
					variants={anims.closeBtnLineAnim}
				/>
				<motion.div
					className='close-btn__line'
					variants={anims.closeBtnLineAnim}
				/>
			</div>
			<div
				className='image-track'
				data-mouse-down-at='0'
				data-prev-percentage='0'
				ref={imageTrackRef}>
				<img
					src='https://unsplash.it/800/600'
					alt='project'
					className='project_img'
					draggable={'false'}
				/>
				<img
					src='https://unsplash.it/800/600'
					alt='project'
					className='project_img'
					draggable={'false'}
				/>
				<img
					src='https://unsplash.it/800/600'
					alt='project'
					className='project_img'
					draggable={'false'}
				/>
				<img
					src='https://unsplash.it/800/600'
					alt='project'
					className='project_img'
					draggable={'false'}
				/>
				<img
					src='https://unsplash.it/800/600'
					alt='project'
					className='project_img'
					draggable={'false'}
				/>
				<img
					src='https://unsplash.it/800/600'
					alt='project'
					className='project_img'
					draggable={'false'}
				/>
				<img
					src='https://unsplash.it/800/600'
					alt='project'
					className='project_img'
					draggable={'false'}
				/>
				<img
					src='https://unsplash.it/800/600'
					alt='project'
					className='project_img'
					draggable={'false'}
				/>
			</div>
		</motion.div>
	);
}

export default Projects;
function addRemoveMouseListeners(
	action: 'add' | 'remove',
	imageTrack: HTMLDivElement
) {
	const method =
		action === 'add' ? 'addEventListener' : 'removeEventListener';
	window[method]('mousedown', (e) =>
		handleMouseDown(e as MouseEvent, imageTrack)
	);
	window[method]('mousemove', (e) =>
		handleMouseMove(e as MouseEvent, imageTrack)
	);
	window[method]('mouseup', (e) =>
		handleMouseUp(e as MouseEvent, imageTrack)
	);
}
function clearAllDataAttributes(track: HTMLDivElement) {
	track.dataset.mouseDownAt = '0';
	track.dataset.prevPercentage = '0';
	track.dataset.percentage = '0';
}
