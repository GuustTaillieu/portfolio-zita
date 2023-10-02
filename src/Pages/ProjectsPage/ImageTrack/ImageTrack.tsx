import { useEffect, useState, useMemo, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import TrackImage from './TrackImage/TrackImage';
import { PROJECTS } from '../projects-data';
import './ImageTrack.scss';
import { useMobileOrientation } from 'react-device-detect';

type Props = {};

const ImageTrack = (props: Props) => {
	const { isLandscape } = useMobileOrientation();
	const [trackWidth, setTrackWidth] = useState(0);
	const [trackHeight, setTrackHeight] = useState(0);
	const carousel = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!carousel.current) return;
		setTrackWidth(carousel.current.clientWidth - window.innerWidth / 2);
		setTrackHeight(carousel.current.clientHeight - window.innerHeight / 2);
	}, [carousel.current]);

	const drag = useMemo(() => {
		if (PROJECTS.length <= 1) return undefined;
		if (isLandscape) return 'x';
		else return 'y';
	}, [isLandscape]);

	const dragX = useMotionValue(0);

	const boundries = useMemo(() => {
		if (drag === 'x')
			return {
				right: 0 + window.innerWidth / 2,
				left: -trackWidth,
			};
		else
			return {
				top: -trackHeight + window.innerHeight / 2,
				bottom: 0,
			};
	}, [isLandscape, trackWidth, trackHeight]);

	const dragBoundries = useMemo(() => {
		if (drag === 'x')
			return [boundries.left, boundries.right] as [number, number];
		else return [boundries.top, boundries.bottom] as [number, number];
	}, [drag, boundries]);

	const backgroundPositionX = useTransform(dragX, dragBoundries, [
		'20%',
		'80%',
	]);

	return (
		<motion.div
			className='image-track'
			ref={carousel}
			drag={drag}
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
