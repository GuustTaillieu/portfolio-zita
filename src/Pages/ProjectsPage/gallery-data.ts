const PROJECTS: ProjectsType = [
	{
		id: 1,
		name: 'Project 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: 'https://unsplash.it/1400/1200',
	},
	{
		id: 2,
		name: 'Project 2',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: 'https://unsplash.it/1400/1200',
	},
	{
		id: 3,
		name: 'Project 3',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: 'https://unsplash.it/1400/1200',
	},
	{
		id: 4,
		name: 'Project 4',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: 'https://unsplash.it/1400/1200',
	},
	{
		id: 5,
		name: 'Project 5',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: 'https://unsplash.it/1400/1200',
	},
	{
		id: 6,
		name: 'Project 6',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: 'https://unsplash.it/1400/1200',
	},
	{
		id: 7,
		name: 'Project 7',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: 'https://unsplash.it/1400/1200',
	},
	{
		id: 8,
		name: 'Project 8',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: 'https://unsplash.it/1400/1200',
	},
];

export type ProjectType = {
	id: number;
	name: string;
	description: string;
	image: string;
};

export type ProjectsType = ProjectType[];

export { PROJECTS };
