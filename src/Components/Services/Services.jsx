import './Services.scss';
import TinySlider from 'tiny-slider-react';

import ArrowIcon from '../Lib/arrow.jsx';
import MoneyIcon from '../Lib/money.jsx';
import DocumentIcon from '../Lib/document.jsx';

import FilledOutline1 from '../../Assets/Images/filled_outline1.png';
import FilledOutline2 from '../../Assets/Images/filled_outline2.png';
import FilledOutline3 from '../../Assets/Images/filled_outline3.png';
import FilledOutline4 from '../../Assets/Images/filled_outline4.png';
import FilledOutline5 from '../../Assets/Images/filled_outline5.png';
import FilledOutline6 from '../../Assets/Images/filled_outline6.png';

import CatImage from '../../Assets/Images/home__services.png';

function HomeServices() {
	const settings = {
		container: '.services__slider-list',
		controlsContainer: '.services__slider-controlles',
		items: 6,
		slideBy: 1,
		nav: false,
		mouseDrag: true,
		loop: true,
		autoplayTimeout: 2000,
	};

	return (
		<>
			<section className='services'>
				<div className='container-sm'>
					<h2 className='section__heading services__heading'>
						Наши услуги
					</h2>

					<div className='services__slider'>
						<ul class='services__slider-list'>
							<TinySlider settings={settings}>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline1}
										alt='Filled Outline'
										width='54'
										height='78'
									/>
									<strong className='services__slider-text'>
										Первичный осмотр
									</strong>
								</li>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline2}
										alt='Filled Outline'
										width='62'
										height='77'
									/>
									<strong className='services__slider-text'>
										Первичный осмотр
									</strong>
								</li>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline3}
										alt='Filled Outline'
										width='72'
										height='77'
									/>
									<strong className='services__slider-text'>
										Хирургическое вмешательство
									</strong>
								</li>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline4}
										alt='Filled Outline'
										width='76'
										height='76'
									/>
									<strong className='services__slider-text'>
										Дерматология
									</strong>
								</li>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline5}
										alt='Filled Outline'
										width='78'
										height='78'
									/>
									<strong className='services__slider-text'>
										Лабораторная диагностика
									</strong>
								</li>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline6}
										alt='Filled Outline'
										width='76'
										height='76'
									/>
									<strong className='services__slider-text'>
										Офтальмология
									</strong>
								</li>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline1}
										alt='Filled Outline'
										width='54'
										height='78'
									/>
									<strong className='services__slider-text'>
										Первичный осмотр
									</strong>
								</li>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline2}
										alt='Filled Outline'
										width='62'
										height='77'
									/>
									<strong className='services__slider-text'>
										Первичный осмотр
									</strong>
								</li>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline3}
										alt='Filled Outline'
										width='72'
										height='77'
									/>
									<strong className='services__slider-text'>
										Хирургическое вмешательство
									</strong>
								</li>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline4}
										alt='Filled Outline'
										width='76'
										height='76'
									/>
									<strong className='services__slider-text'>
										Дерматология
									</strong>
								</li>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline5}
										alt='Filled Outline'
										width='78'
										height='78'
									/>
									<strong className='services__slider-text'>
										Лабораторная диагностика
									</strong>
								</li>
								<li className='services__slider-item'>
									<img
										className='services__slider-img'
										src={FilledOutline6}
										alt='Filled Outline'
										width='76'
										height='76'
									/>
									<strong className='services__slider-text'>
										Офтальмология
									</strong>
								</li>
							</TinySlider>
						</ul>

						<div className='services__slider-controlles'>
							<button className='arrow__prev prev'>
								<ArrowIcon />
							</button>
							<button className='arrow__next next'>
								<ArrowIcon />
							</button>
						</div>
					</div>

					<div className='services__card'>
						<img
							className='services__card-img'
							src={CatImage}
							alt='Cat img'
							width='524'
							height='329'
						/>

						<div className='services__card-content'>
							<h3 className='services__card-heading'>
								Первичный осмотр
							</h3>

							<p className='services__card-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга “Дневной
								стационар” которая позволяет экономить Ваше
								время. Вы имеете возможность оставить у нас.
							</p>

							<p className='services__card-description'>
								По условиям акции в нашей клинике
								предоставляетса безплатная услуга “Дневной
								стационар” которая позволяет экономить Ваше
								время. Вы имеете возможность оставить у нас.
							</p>

							<div className='services__btn-group'>
								<button className='main__btn main__btn--warning'>
									<MoneyIcon />
									Узнать цену
								</button>

								<button className='main__btn main__btn--warning'>
									<DocumentIcon />
									Записаться на приём
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomeServices;
