import about_me from '/images/about.jpg';
import projects from '/images/projects.jpg';
import skills from '/images/skills.jpg';
import experience from '/images/experience.png';
import Aboutme from '../../Sections/Aboutme/Aboutme';
import Skills from '../../Sections/Skills/Skills';
import Experience from '../../Sections/Experience/Experience';
import { ContentProps } from '../SectionContent/SectionContent';
import Projects from '../../Sections/Projects/Projects';

export type ScrollNavItem = {
	title: string;
	imageSet: string[];
	component: (props: ContentProps) => JSX.Element;
	scrollPosition: number;
};

const SCROLL_NAV_ITEMS: ScrollNavItem[] = [
	{
		title: 'About me',
		imageSet: [about_me, about_me],
		component: Aboutme,
		scrollPosition: 0,
	},
	{
		title: 'Projects',
		imageSet: [projects, projects],
		component: Projects,
		scrollPosition: 1,
	},
	{
		title: 'Skills',
		imageSet: [skills, skills],
		component: Skills,
		scrollPosition: 2,
	},
	{
		title: 'Experience',
		imageSet: [experience, experience],
		component: Experience,
		scrollPosition: 3,
	},
];

declare global {
	interface Array<T> {
		toSorted(): T[];
	}
}

SCROLL_NAV_ITEMS.toSorted = function () {
	return this.sort((a, b) => a.scrollPosition - b.scrollPosition);
};

export default SCROLL_NAV_ITEMS;
