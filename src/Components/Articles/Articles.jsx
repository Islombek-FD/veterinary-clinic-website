import './Articles.scss';

import Button from '../Button/Button.jsx';

import CatImage from '../../Assets/Images/articles__cat.png';
import DogsImage from '../../Assets/Images/articles__dogs.png';
import DoctorImage from '../../Assets/Images/articles__doctor.png';

function Articles() {
	return (
		<>
			<section className='articles'>
				<div className='container'>
					<h2 className='section__heading articles__heading'>
						Полезные статьи
					</h2>

					<ul className='articles__cards'>
						<li className='articles__card'>
							<img
								className='articles__card-img'
								src={CatImage}
								alt='Cat img'
								width='311'
								height='180'
							/>

							<div className='articles__card-info'>
								<time
									className='articles__card-date'
									dateTime='2020-08-28 18:00'>
									28.08.2020
								</time>

								<h3 className='articles__card-heading'>
									Ультразвуковая <br /> чистка зубов
								</h3>

								<p className='articles__card-description'>
									Появление в доме котенка приятное и радосное
									событие. Но не всегда этот пушистый зверек
									берется от ...
								</p>

								<Button />
							</div>
						</li>

						<li className='articles__card flex'>
							<img
								className='articles__card-img'
								src={DogsImage}
								alt='Cat img'
								width='311'
								height='435'
							/>

							<div className='articles__card-info'>
								<div className='articles__card-header'>
									<ul className='articles__card-list'>
										<li className='articles__card-item'>
											<a
												className='articles__card-link'
												href='#link'
												target='__blank'>
												#собака
											</a>
										</li>
										<li className='articles__card-item'>
											<a
												className='articles__card-link'
												href='#link'
												target='__blank'>
												#дом
											</a>
										</li>
										<li className='articles__card-item'>
											<a
												className='articles__card-link'
												href='#link'
												target='__blank'>
												#уход
											</a>
										</li>
									</ul>
									<time
										className='articles__card-date'
										dateTime='2020-08-29 18:00'>
										29.08.2020
									</time>
								</div>
								<h3 className='articles__card-heading'>
									Перед тем как <br /> завести собаку
								</h3>

								<p className='articles__card-description'>
									Появление в доме котенка приятное и радосное
									событие. Но не всегда этот пушистый зверек
									берется от заводчиков, Бивают и ситуации
									когда животное находят на улице и дают ему
									теплый дом. И первым вопросом, который
									возникает у новых хозяев – как определить
									возраст котенка. Появление в доме котенка
									приятное и радосное событие.
								</p>

								<Button />
							</div>
						</li>

						<li className='articles__card'>
							<img
								className='articles__card-img'
								src={DoctorImage}
								alt='Cat img'
								width='311'
								height='180'
							/>

							<div className='articles__card-info'>
								<time
									className='articles__card-date'
									dateTime='2020-07-21 18:00'>
									21.07.2020
								</time>

								<h3 className='articles__card-heading'>
									Когда привавать питомца?
								</h3>

								<p className='articles__card-description'>
									Появление в доме котенка приятное и радосное
									событие. Но не всегда этот пушистый зверек
									берется от ...
								</p>

								<Button />
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Articles;
