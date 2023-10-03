import React from 'react';
import { MotionValue, motion } from 'framer-motion';
import { ProjectType } from '../../projects-data';
import { useNavigate } from 'react-router';
import { useDeviceSelectors } from 'react-device-detect';
import { FaArrowRight } from 'react-icons/fa';
import './TrackImage.scss';

type Props = {
	project: ProjectType;
	backgroundPositionX: MotionValue<string>;
};

function TrackImage({ project, backgroundPositionX }: Props) {
	const [{ isMobile }, data] = useDeviceSelectors(window.navigator.userAgent);
	const navigate = useNavigate();
	const [clicking, setClicking] = React.useState(false);

	return (
		<motion.div
			layout
			style={{
				backgroundImage: `image-set(url(${project.imageSet[0]}) 1x, url(${project.imageSet[1]}) 2x)`,
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
			data-cursor-text='Click or Drag'>
			{isMobile && (
				<motion.div
					className='project_img_overlay'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
					}}>
					<FaArrowRight />
				</motion.div>
			)}
		</motion.div>
	);
}

export default TrackImage;
