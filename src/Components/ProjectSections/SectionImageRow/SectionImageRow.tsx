import { motion } from 'framer-motion';
import './SectionImageRow.scss';

type Props = {
	images: string[][];
};

const SectionImageRow = ({ images }: Props) => {
	return (
		<div className='project_section' data-type='image_row'>
			{images.map((image, index) => (
				<motion.div
					className='image_row_image'
					key={image[0] + index}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{
						duration: 1,
						ease: 'easeInOut',
						delay: index / 10 + 0.5,
					}}
					style={{
						backgroundImage: `image-set(
							url(${image[0]}) 1x,
							url(${image[1]}) 2x`,
					}}
					data-cursor='-exclusion'
				/>
			))}
		</div>
	);
};

export default SectionImageRow;
