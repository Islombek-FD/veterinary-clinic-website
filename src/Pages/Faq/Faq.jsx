import Header from '../../Components/Header/Header.jsx';
import FaqHero from '../../Components/FaqHero/FaqHero.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

function Faq() {
	return (
		<>
			<div className='wrapper'>
				<Header />

				<main className='main'>
					<FaqHero />
				</main>

				<Footer />
			</div>
		</>
	);
}

export default Faq;
