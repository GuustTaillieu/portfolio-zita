import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SectionFullWidthImage.scss';

type Props = {
	image: string;
};

const SectionFullWidthImage = ({ image }: Props) => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end end'],
	});
	const widthPercentage = useTransform(
		scrollYProgress,
		[0, 1],
		['0%', '100%']
	);

	return (
		<div
			className='project_section'
			data-type='full_width_image'
			ref={sectionRef}>
			<motion.div
				style={{
					width: widthPercentage,
					backgroundImage: `url(${image})`,
				}}
			/>
		</div>
	);
};

export default SectionFullWidthImage;
