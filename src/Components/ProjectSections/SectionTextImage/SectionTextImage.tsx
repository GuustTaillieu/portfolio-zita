import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import './SectionTextImage.scss';
import { useDeviceSelectors } from 'react-device-detect';

type Props = {
	title?: string;
	image: string;
	text: string;
	textFirst?: boolean;
};

const SectionTextImage = ({ title, image, text, textFirst }: Props) => {
	const [{ isMobile }, data] = useDeviceSelectors(window.navigator.userAgent);
	const flexDir = useMemo(() => {
		if (isMobile) {
			return 'column';
		} else {
			return textFirst ? 'row-reverse' : 'row';
		}
	}, [textFirst]);

	return (
		<motion.div
			className='project_section'
			data-type='text_image'
			style={{ flexDirection: flexDir }}
			transition={{
				duration: 0.5,
				ease: 'easeInOut',
				staggerChildren: 0.5,
				delayChildren: 0.5,
			}}>
			<motion.img
				data-cursor='-exclusion'
				src={image}
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

export default SectionTextImage;
