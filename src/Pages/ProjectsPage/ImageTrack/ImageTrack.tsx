import { useEffect, useState, useMemo, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import TrackImage from './TrackImage/TrackImage';
import { PROJECTS } from '../projects-data';
import './ImageTrack.scss';

type Props = {};

const ImageTrack = (props: Props) => {
	const [trackWidth, setTrackWidth] = useState(0);
	const carousel = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!carousel.current) return;
		setTrackWidth(carousel.current.clientWidth - window.innerWidth / 2);
	}, [carousel.current]);

	const dragX = useMotionValue(0);

	const boundries = useMemo(() => {
		return {
			right: 0 + window.innerWidth / 2,
			left: -trackWidth,
		};
	}, [trackWidth]);

	const backgroundPositionX = useTransform(
		dragX,
		[boundries.left, boundries.right],
		['20%', '80%']
	);

	return (
		<motion.div
			className='image-track'
			ref={carousel}
			drag={PROJECTS.length > 1 ? 'x' : undefined}
			_dragX={dragX}
			style={{ x: dragX }}
			dragConstraints={boundries}
			dragElastic={0.5}>
			{PROJECTS.map((project) => (
				<TrackImage
					project={project}
					backgroundPositionX={backgroundPositionX}
					key={project.id}
				/>
			))}
		</motion.div>
	);
};

export default ImageTrack;
