import './AboutHero.scss';

function AboutHero() {
	return (
		<>
			<section className='about-hero'>
				<div className='container-lg'>
					<div className='about-hero__content'>
						<div className='about-hero__info'>
							<h2 className='main__heading about-hero__heading'>
								О клинике
							</h2>

							<p className='main__description about-hero__description'>
								Собака, кошка, попугай, шиншилла… Сколько
								радости и тепла приносят эти весёлые друзья в
								наш дом.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutHero;
