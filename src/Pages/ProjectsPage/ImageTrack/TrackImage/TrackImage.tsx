import React from 'react';
import { MotionValue, motion } from 'framer-motion';
import { ProjectType } from '../../projects-data';
import { useNavigate } from 'react-router';

type Props = {
	project: ProjectType;
	backgroundPositionX: MotionValue<string>;
};

function TrackImage({ project, backgroundPositionX }: Props) {
	const navigate = useNavigate();
	const [clicking, setClicking] = React.useState(false);

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
			onMouseDown={() => setClicking(true)}
			onMouseMove={() => setClicking(false)}
			onMouseUp={() => clicking && navigate(`/projects/${project.id}`)}
			data-cursor-text='Click or Drag'
		/>
	);
}

export default TrackImage;
