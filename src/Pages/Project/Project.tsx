import { useEffect } from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import './Project.scss';
import { PROJECTS } from '../../Sections/Projects/gallery-data';
import { useHomeState } from '../../hooks/useHomeState';
import { useNavigate } from 'react-router-dom';

type Props = {
	id?: number | null;
};

const Project = ({ id }: Props) => {
	const paramId = window.location.pathname.split('/')[2];
	if (!id) id = typeof paramId === 'string' ? parseInt(paramId) : null;
	const project = PROJECTS.find((project) => project.id === id)!;
	const { setProjectToShow } = useHomeState();
	const navigate = useNavigate();

	useEffect(() => {
		window.history.replaceState(null, '', `/projects/${project.id}`);
		window.onpopstate = () => {
			setProjectToShow(null);
			navigate('/');
		};
	}, [project.name]);

	return (
		<motion.div
			className='project'
			key='project'
			layoutId='project_background'>
			<motion.div
				className='project_img'
				layoutId={`project-${id}`}
				style={{ backgroundImage: `url(${project.image})` }}
				draggable={'false'}
				onDoubleClick={() => setProjectToShow(null)}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}></motion.div>

			<h2>{project.name}</h2>
		</motion.div>
	);
};

export default Project;
