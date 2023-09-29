import React from 'react';
import { MotionValue, motion } from 'framer-motion';
import { ProjectType } from '../../gallery-data';
import { useNavigate } from 'react-router';

type Props = {
	project: ProjectType;
	backgroundPositionX: MotionValue<string>;
};

function TrackImage({ project, backgroundPositionX }: Props) {
	const navigate = useNavigate();

	return (
		<motion.div
			layout
			style={{
				backgroundImage: `url(${project.image})`,
				backgroundPositionX,
			}}
			className='project_img'
			draggable={'false'}
			key={project.name}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 0.5,
				ease: 'easeInOut',
			}}
			onDoubleClick={() => navigate(`/projects/${project.id}`)}
		/>
	);
}

export default TrackImage;
