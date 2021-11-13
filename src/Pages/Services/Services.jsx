import Header from '../../Components/Header/Header.jsx';
import ServicesHero from '../../Components/ServicesHero/ServicesHero.jsx';
import ServicesCards from '../../Components/ServicesCards/ServicesCards.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

function Services() {
	return (
		<>
			<div className='wrapper'>
				<Header />

				<main className='main'>
					<ServicesHero />

					<ServicesCards />
				</main>

				<Footer />
			</div>
		</>
	);
}

export default Services;
