import Header from '../../Components/Header/Header.jsx';
import BlogHero from '../../Components/BlogHero/BlogHero.jsx';
import BlogInfo from '../../Components/BlogInfo/BlogInfo.jsx';
import BlogCards from '../../Components/BlogCards/BlogCards.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

function Blog() {
	return (
		<>
			<div className='wrapper'>
				<Header />

				<main className='main'>
					<BlogHero />

					<BlogInfo />

					<BlogCards />
				</main>

				<Footer />
			</div>
		</>
	);
}

export default Blog;
