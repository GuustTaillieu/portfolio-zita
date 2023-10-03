const PROJECTS: ProjectsType = [
	{
		id: 1,
		name: 'Project 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		imageSet: [
			'https://unsplash.it/1400/1200',
			'https://unsplash.it/800/600',
		],
	},
	{
		id: 2,
		name: 'Project 2',
		description:
			'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		imageSet: [
			'https://unsplash.it/1400/1200',
			'https://unsplash.it/800/600',
		],
	},
	{
		id: 3,
		name: 'Project 3',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		imageSet: [
			'https://unsplash.it/1400/1200',
			'https://unsplash.it/800/600',
		],
	},
	{
		id: 4,
		name: 'Project 4',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		imageSet: [
			'https://unsplash.it/1400/1200',
			'https://unsplash.it/800/600',
		],
	},
	{
		id: 5,
		name: 'Project 5',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		imageSet: [
			'https://unsplash.it/1400/1200',
			'https://unsplash.it/800/600',
		],
	},
	{
		id: 6,
		name: 'Project 6',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		imageSet: [
			'https://unsplash.it/1400/1200',
			'https://unsplash.it/800/600',
		],
	},
	{
		id: 7,
		name: 'Project 7',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		imageSet: [
			'https://unsplash.it/1400/1200',
			'https://unsplash.it/800/600',
		],
	},
	{
		id: 8,
		name: 'Project 8',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		imageSet: [
			'https://unsplash.it/1400/1200',
			'https://unsplash.it/800/600',
		],
	},
];

export type ProjectType = {
	id: number;
	name: string;
	description: string;
	imageSet: string[];
};

export type ProjectsType = ProjectType[];

export { PROJECTS };
