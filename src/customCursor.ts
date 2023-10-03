import MouseFollower from 'mouse-follower';
import gsap from 'gsap';

MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower({
	speed: 1,
	stateDetection: {
		'-pointer': 'button',
		'-hidden': 'input',
		'-inverse': 'h3,h4,h5,h6,p,.project,.project_section',
		'-exclusion': '.see-more_button',
	},
});

document.addEventListener('click', () => {
	cursor.removeState('-exclusion');
	cursor.removeState('-inverse');
});

export default cursor;
