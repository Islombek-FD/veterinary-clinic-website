import './Hero.scss';

function HomeHero() {
	return (
		<>
			<section className='hero'>
				<div className='hero__content'>
					<div className='container'>
						<div className='hero__info'>
							<h1 className='main__heading'>
								Мы заботимся о{' '}
								<span className='hero__heading-secondary'>
									ваших питомцах!
								</span>
							</h1>

							<p className='main__description'>
								Вам и Вашему любимцу множество услуг по
								диагностике, профилактике заболеваний по лечению
								и уходу за Вашими животными. Профессионалы
								работающие в нашей клинике сделают все для того,
								чтобы быстро, эффективно и максимально
								безболезненно выполнить любие процедуры, которые
								необходимы Вашему домашнему любимцу.
							</p>

							<button className='main__btn main__btn--dark'>
								Наши услуги
							</button>
						</div>
					</div>
				</div>

				<div className='hero__text'>
					<span className='hero__text-line'></span>
					<p className='hero__clinic-info'>
						Наша ветеринарная клиника готова уделить максимум
						внимания Вам и Вашему питамцу. Здоровье и благополучие
						Ваших животных очень важно для нас и мы стремимся
						оказать наилучшую возможную ветеринарную помощь.
					</p>
					<span className='hero__text-line'></span>
					<strong className='hero__clinic-name'>
						Оржоникидзевская Ветеринарная клиника
					</strong>
				</div>
			</section>
		</>
	);
}

export default HomeHero;
