import Header from '../../Components/Header/Header.jsx';
import AboutHero from '../../Components/AboutHero/AboutHero.jsx';
import AboutInfo from '../../Components/AboutInfo/AboutInfo.jsx';
import AboutGaleria from '../../Components/AboutGaleria/AboutGaleria.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

function About() {
	return (
		<>
			<div className='wrapper'>
				<Header />

				<main className='main'>
					<AboutHero />

					<AboutInfo />

					<AboutGaleria />
				</main>

				<Footer />
			</div>
		</>
	);
}

export default About;
