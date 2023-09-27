import { useEffect, useRef, useState } from 'react';
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
import { PROJECTS } from './gallery-data';

function Projects({ showContent }: ContentProps) {
	const imageTrackRef = useRef<HTMLDivElement>(null);
	const { isDocked, setIsDocked } = useHomeState();
	const { projectToShow, setProjectToShow } = useHomeState();

	useEffect(() => {
		clearAllDataAttributes(imageTrackRef.current!);
		addRemoveMouseListeners('add', imageTrackRef.current!);

		return () => {
			addRemoveMouseListeners('remove', imageTrackRef.current!);
		};
	}, []);

	return (
		<motion.div
			className={'projects' + (isDocked ? ' show' : '')}
			variants={anims.sectionContentAnim}
			initial='initial'
			animate={showContent ? 'animate' : 'initial'}
			key='projects'
			layoutId='project_background'>
			<motion.div
				className='close-btn'
				onClick={() => setIsDocked(false)}
				layoutId='close-btn'>
				<motion.div
					className='close-btn__line'
					variants={anims.closeBtnLineAnim}
				/>
				<motion.div
					className='close-btn__line'
					variants={anims.closeBtnLineAnim}
				/>
			</motion.div>

			<div
				className='image-track'
				data-mouse-down-at='0'
				data-prev-percentage='0'
				ref={imageTrackRef}>
				{PROJECTS.map((project, i) => (
					<motion.div
						style={{ backgroundImage: `url(${project.image})` }}
						className='project_img'
						draggable={'false'}
						layoutId={`project-${project.id}`}
						key={project.name}
						onDoubleClick={() => setProjectToShow(project.id)}
						variants={anims.projectImgAnim}
						initial='initial'
						animate={
							projectToShow === null
								? 'animate'
								: projectToShow === project.id
								? 'animate'
								: 'initial'
						}
						transition={{ duration: 0.5 }}
					/>
				))}
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
