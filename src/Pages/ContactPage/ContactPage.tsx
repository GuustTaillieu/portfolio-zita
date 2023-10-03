import { DefaultPageTransition } from '../../transitions';

const ContactPage = () => {
	return (
		<div className='contact'>
			<h2>Contact</h2>
		</div>
	);
};

export default () => DefaultPageTransition(ContactPage);
