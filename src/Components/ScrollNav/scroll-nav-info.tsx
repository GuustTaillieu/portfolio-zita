import about_me from '/images/about.jpg';
import projects from '/images/projects.jpg';
import skills from '/images/skills.jpg';
import experience from '/images/experience.png';
import Aboutme from '../../Sections/Aboutme/Aboutme';
import Projects from '../../Sections/Projects/Projects';
import Skills from '../../Sections/Skills/Skills';
import Experience from '../../Sections/Experience/Experience';
import { ContentProps } from '../SectionContent/SectionContent';

export type ScrollNavItem = {
	title: string;
	image: string;
	component: (props: ContentProps) => JSX.Element;
	scrollPosition: number;
};

const SCROLL_NAV_ITEMS: ScrollNavItem[] = [
	{
		title: 'About me',
		image: about_me,
		component: Aboutme,
		scrollPosition: 0,
	},
	{
		title: 'Projects',
		image: projects,
		component: Projects,
		scrollPosition: 1,
	},
	{
		title: 'Skills',
		image: skills,
		component: Skills,
		scrollPosition: 2,
	},
	{
		title: 'Experience',
		image: experience,
		component: Experience,
		scrollPosition: 3,
	},
];

export default SCROLL_NAV_ITEMS;
