import { useEffect } from 'react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import './ProjectPage.scss';
import { useNavigate, useParams } from 'react-router';
import { PROJECTS } from '../ProjectsPage/gallery-data';
import SectionFullWidthImage from '../../Components/ProjectSections/SectionFullWidthImage/SectionFullWidthImage';
import SectionImageText from '../../Components/ProjectSections/SectionImageText/SectionImageText';
import { DefaultPageTransition } from '../../transitions';
import SectionImageCenter from '../../Components/ProjectSections/SectionImageCenter/SectionImageCenter';
import SectionImageRow from '../../Components/ProjectSections/SectionImageRow/SectionImageRow';
import SectionNextProject from '../../Components/ProjectSections/SectionNextProject/SectionNextProject';
import { Link } from 'react-router-dom';

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
			<Link to='/projects'>
				<motion.div
					style={{
						backgroundImage: `url(${project.image})`,
					}}
					className='project_img'
					key={project.name}
					onDoubleClick={() => navigate('/projects')}
				/>
			</Link>
			<motion.h2
				className='project_title'
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 'all' }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}>
				{project.name}
			</motion.h2>
			<SectionImageCenter image={project.image} />
			<SectionImageText
				image={project.image}
				text={project.description}
				title={project.name}
			/>
			<SectionFullWidthImage key={project.id} image={project.image} />
			<SectionImageRow
				key={project.id}
				images={Array(3).fill(project.image)}
			/>
			<SectionNextProject
				key={project.id}
				currentProjectId={project.id}
			/>
		</motion.div>
	);
};

export default () => DefaultPageTransition(ProjectPage);