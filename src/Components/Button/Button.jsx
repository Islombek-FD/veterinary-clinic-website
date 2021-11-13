import './Button.scss';
import PetIcon from '../Lib/pet.jsx';

function Button() {
	return (
		<>
			<button className='button'>
				<PetIcon />
				Задать вопрос
			</button>
		</>
	);
}

export default Button;
