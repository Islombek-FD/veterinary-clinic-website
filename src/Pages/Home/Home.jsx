import Header from '../../Components/Header/Header.jsx';
import Hero from '../../Components/Hero/Hero.jsx';
import Services from '../../Components/Services/Services.jsx';
import SendingEmail from '../../Components/SendingEmail/SendingEmail.jsx';
import Articles from '../../Components/Articles/Articles.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

function Home() {
	return (
		<>
			<div className='wrapper'>
				<Header />

				<main className='main'>
					<Hero />

					<Services />

					<SendingEmail />

					<Articles />
				</main>

				<Footer />
			</div>
		</>
	);
}

export default Home;
