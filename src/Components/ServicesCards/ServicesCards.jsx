import './ServicesCards.scss';

import CardImage1 from '../../Assets/Images/filled_outline1.png';
import CardImage2 from '../../Assets/Images/filled_outline2.png';
import CardImage3 from '../../Assets/Images/filled_outline3.png';
import CardImage4 from '../../Assets/Images/filled_outline4.png';
import CardImage5 from '../../Assets/Images/filled_outline5.png';
import CardImage6 from '../../Assets/Images/filled_outline6.png';
import CardImage7 from '../../Assets/Images/filled_outline7.png';
import CardImage8 from '../../Assets/Images/filled_outline8.png';
import CardImage9 from '../../Assets/Images/filled_outline9.png';
import CardImage10 from '../../Assets/Images/filled_outline10.png';
import CardImage11 from '../../Assets/Images/filled_outline11.png';
import CardImage12 from '../../Assets/Images/filled_outline12.png';

function ServicesCards() {
	return (
		<>
			<section className='services-cards'>
				<div className='container'>
					<h2 className='section__heading visually-hidden'>
						Types of services department
					</h2>

					<ul className='services-cards__list'>
						<li className='services-cards__item'>
							<img src={CardImage1} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								Первичный осмотр
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
						<li className='services-cards__item'>
							<img src={CardImage2} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								Первичный осмотр
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
						<li className='services-cards__item'>
							<img src={CardImage3} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								Хирургическое вмешательство
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
						<li className='services-cards__item'>
							<img src={CardImage4} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								Дерматология
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
						<li className='services-cards__item'>
							<img src={CardImage5} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								Лабораторная диагностика
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
						<li className='services-cards__item'>
							<img src={CardImage6} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								Офтальмология
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
						<li className='services-cards__item'>
							<img src={CardImage7} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								УЗИ диагностика
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
						<li className='services-cards__item'>
							<img src={CardImage8} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								Чипированиея
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
						<li className='services-cards__item'>
							<img src={CardImage9} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								Международ- ные паспорта
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
						<li className='services-cards__item'>
							<img src={CardImage10} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								Вакцинация
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
						<li className='services-cards__item'>
							<img src={CardImage11} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								Стоматология
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
						<li className='services-cards__item'>
							<img src={CardImage12} alt='Card img' />
							<h3 className='services-cards__item-heading'>
								Вызов на дом
							</h3>

							<p className='services-cards__item-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга
							</p>

							<button className='main__btn main__btn--warning'>
								Узнать больше
							</button>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default ServicesCards;
