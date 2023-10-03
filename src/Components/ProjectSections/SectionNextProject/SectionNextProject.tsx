import { useMemo } from 'react';
import { motion } from 'framer-motion';
import './SectionNextProject.scss';
import { PROJECTS } from '../../../Pages/ProjectsPage/projects-data';
import { useNavigate } from 'react-router-dom';

type Props = {
	currentProjectId: number;
};

const SectionNextProject = ({ currentProjectId }: Props) => {
	const navigate = useNavigate();

	const nextProject = useMemo(() => {
		const nextProject = PROJECTS.find(
			(project) => project.id === currentProjectId + 1
		);
		return nextProject ?? PROJECTS[0];
	}, [currentProjectId]);

	return (
		<motion.div
			className='project_section'
			data-type='next_project'
			onClick={() => navigate(`/projects/${nextProject.id}`)}>
			<motion.h2
				data-cursor='-exclusion'
				className='project_title'
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 'all' }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}>
				Next Project
			</motion.h2>
			<motion.img
				data-cursor='-exclusion'
				loading='lazy'
				src={nextProject.imageSet[0]}
				srcSet={`${nextProject.imageSet[0]} 1x, ${nextProject.imageSet[1]} 2x`}
				alt={'next project'}
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.1 }}
			/>
		</motion.div>
	);
};

export default SectionNextProject;
