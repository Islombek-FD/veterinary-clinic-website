import './BlogHero.scss';

function BlogHero() {
	return (
		<>
			<section className='blog-hero'>
				<div className='container-lg'>
					<div className='blog-hero__content'>
						<h2 className='main__heading blog-hero__heading'>
							Полезные статьи
						</h2>

						<p className='main__description'>
							Узнать информацию о наших услугах, записаться на
							прием к врачу или проконсультироваться вы можете по
							телефону, в любое удобное для вас время.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default BlogHero;
