import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './ProjectPage.scss';
import { useNavigate, useParams } from 'react-router';
import { PROJECTS } from '../ProjectsPage/projects-data';
import SectionFullWidthImage from '../../Components/ProjectSections/SectionFullWidthImage/SectionFullWidthImage';
import SectionImageText from '../../Components/ProjectSections/SectionImageText/SectionImageText';
import { DefaultPageTransition } from '../../transitions';
import SectionImageCenter from '../../Components/ProjectSections/SectionImageCenter/SectionImageCenter';
import SectionImageRow from '../../Components/ProjectSections/SectionImageRow/SectionImageRow';
import SectionNextProject from '../../Components/ProjectSections/SectionNextProject/SectionNextProject';
import SectionTextImage from '../../Components/ProjectSections/SectionTextImage/SectionTextImage';
import CloseButton from '../../Components/CloseButton/CloseButton';

type Props = {};

const ProjectPage = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	}, [id]);
	if (!id) return <div>404</div>;
	const project = PROJECTS.find((project) => project.id === parseInt(id));
	if (!project) return <div>404</div>;

	return (
		<motion.div className='project' key={'project-' + project.id}>
			<motion.div
				style={{
					backgroundImage: `url(${project.image})`,
				}}
				className='project_img'
				key={'header' + project.name}
				onClick={() => navigate('/projects')}
			/>
			<CloseButton callback={() => navigate('/projects')} />
			<motion.h2
				className='project_title'
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 'all' }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}>
				{project.name}
			</motion.h2>
			<SectionImageCenter
				key={'section-image-center-' + project.id}
				image={project.image}
			/>
			<SectionImageText
				key={'section-image-text-' + project.id}
				image={project.image}
				text={project.description}
				title={project.name}
			/>
			<SectionFullWidthImage
				key={'section-full-width-image-' + project.id}
				image={project.image}
			/>
			<SectionImageRow
				key={'section-image-row-' + project.id}
				images={Array(3).fill(project.image)}
			/>
			<SectionTextImage
				key={'section-text-image-' + project.id}
				image={project.image}
				text={project.description}
				title={project.name}
			/>
			<SectionNextProject
				key={'section-next-project-' + project.id}
				currentProjectId={project.id}
			/>
		</motion.div>
	);
};

export default () => DefaultPageTransition(ProjectPage);
