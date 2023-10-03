import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SectionFullWidthImage.scss';

type Props = {
	imageSet: string[];
};

const SectionFullWidthImage = ({ imageSet }: Props) => {
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
				data-cursor='-exclusion'
				style={{
					width: widthPercentage,
					backgroundImage: `image-set(url(${imageSet[0]}) 1x, url(${imageSet[1]}) 2x)`,
				}}
			/>
		</div>
	);
};

export default SectionFullWidthImage;
