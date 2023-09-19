const eases = {
	fast: [0.175, 0.885, 0.32, 1.275],
	bounce: [0.175, 0.885, 0.32, 1.275],
	easeInOutCubic: [0.65, 0, 0.35, 1],
	easeInOutQuart: [0.76, 0, 0.24, 1],
	easeInQuart: [0.5, 0, 0.75, 0],
	easeInOutQuint: [0.83, 0, 0.17, 1],
};

const anims = {
	defaultPageTransition: {
		initial: { x: 300, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: -300, opacity: 0 },
	},
	scrollNavSlideLeftAnim: {
		initial: {
			scale: 1,
			left: '50%',
			x: '-50%',
			transition: {
				duration: 0.5,
				ease: eases.easeInOutQuart,
				delay: 0.5,
			},
		},
		animate: {
			scale: 1.8,
			left: '0%',
			x: 'calc(-65% - 0.125rem)',
			transition: { duration: 0.5, ease: eases.easeInOutQuart },
		},
		exit: { scale: 1, left: '50%', x: '-50%' },
	},
	navigationAnim: {
		initial: { x: '-50%', opacity: 0, y: -100 },
		animate: { x: '-50%', opacity: 1, y: 0 },
		exit: { x: '-50%', opacity: 0, y: -100 },
	},
	scrollNavTextAnim: {
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0 },
	},
	sectionContentAnim: {
		initial: {
			opacity: 0,
			y: 50,
			transition: {
				duration: 0.5,
				delayChildren: 0.4,
				staggerChildren: 0.5,
				ease: eases.easeInOutCubic,
			},
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				delay: 0.5,
				delayChildren: 0.4,
				staggerChildren: 0.5,
				ease: eases.easeInOutCubic,
			},
		},
	},
};

export default anims;
