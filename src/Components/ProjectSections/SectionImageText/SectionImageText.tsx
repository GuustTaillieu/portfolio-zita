import { useMemo } from 'react';
import { motion } from 'framer-motion';
import './SectionImageText.scss';
import { useMobileOrientation } from 'react-device-detect';

type Props = {
	title?: string;
	imageSet: string[];
	text: string;
	textFirst?: boolean;
};

const SectionImageText = ({ title, imageSet, text, textFirst }: Props) => {
	const { isPortrait } = useMobileOrientation();

	const flexDir = useMemo(() => {
		if (isPortrait) {
			return 'column';
		} else {
			return textFirst ? 'row-reverse' : 'row';
		}
	}, [textFirst]);

	return (
		<motion.div
			className='project_section'
			data-type='image_text'
			style={{ flexDirection: flexDir }}
			transition={{
				duration: 0.5,
				ease: 'easeInOut',
				staggerChildren: 0.5,
				delayChildren: 0.5,
			}}>
			<motion.img
				data-cursor='-exclusion'
				loading='lazy'
				src={imageSet[0]}
				srcSet={`${imageSet[0]} 1x, ${imageSet[1]} 2x`}
				alt={title ?? 'project image'}
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
			/>
			<motion.div
				data-cursor='-exclusion'
				className='project_section_text'
				style={{ textAlign: textFirst ? 'right' : 'left' }}
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 'all' }}>
				<h3>{title}</h3>
				<p>{text}</p>
			</motion.div>
		</motion.div>
	);
};

export default SectionImageText;
