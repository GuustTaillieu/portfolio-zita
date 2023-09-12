import { defaultPageTransition } from '../transitions';

type Props = {};

const Contact = (props: Props) => {
	return (
		<div className='contact'>
			<h2>Contact</h2>
			<p>Welcome to the contact page</p>
		</div>
	);
};

export default defaultPageTransition(Contact);
