import './BlogCards.scss';
import Button from '../Button/Button.jsx';
import LoadedIcon from '../Lib/loaded.jsx';

import CardImage1 from '../../Assets/Images/articles__cat.png';
import CardImage2 from '../../Assets/Images/articles__doctor.png';
import CardImage3 from '../../Assets/Images/about_galeria_dog3.png';
import CardImage4 from '../../Assets/Images/articles__cat.png';
import CardImage5 from '../../Assets/Images/about_galeria_cat1.png';
import CardImage6 from '../../Assets/Images/about_galeria_mouse.png';
import CardImage7 from '../../Assets/Images/about_galeria_dog1.png';
import CardImage8 from '../../Assets/Images/about_galeria_dog2.png';

function BlogCards() {
	return (
		<>
			<section className='blog-cards'>
				<div className='container'>
					<h2 className='section__heading visually-hidden'>
						List of information about animals
					</h2>

					<ul className='cards__list'>
						<li className='card__item'>
							<img
								className='card__img'
								src={CardImage1}
								alt='Cat img'
								width='305'
								height='180'
							/>

							<div className='card__info'>
								<time
									className='card__date'
									dateTime='2020-08-28 18:00'>
									28.08.2020
								</time>

								<h3 className='card__heading'>
									Ультразвуковая чистка зубов
								</h3>

								<p className='card__description'>
									Появление в доме котенка приятное и радосное
									событие. Но не всегда этот пушистый зверек
									берется от ...
								</p>

								<Button />
							</div>
						</li>
						<li className='card__item'>
							<img
								className='card__img'
								src={CardImage2}
								alt='Doctor and dog img'
								width='305'
								height='180'
							/>

							<div className='card__info'>
								<time
									className='card__date'
									dateTime='2020-07-21 18:00'>
									21.07.2020
								</time>

								<h3 className='card__heading'>
									Когда привавать питомца?
								</h3>

								<p className='card__description'>
									Появление в доме котенка приятное и радосное
									событие. Но не всегда этот пушистый зверек
									берется от ...
								</p>

								<Button />
							</div>
						</li>
						<li className='card__item'>
							<img
								className='card__img'
								src={CardImage3}
								alt='Dogs img'
								width='305'
								height='180'
							/>

							<div className='card__info'>
								<time
									className='card__date'
									dateTime='2020-09-28 18:00'>
									28.09.2020
								</time>

								<h3 className='card__heading'>
									Как правильно купать животных
								</h3>

								<p className='card__description'>
									Появление в доме котенка приятное и радосное
									событие. Но не всегда этот пушистый зверек
									берется от ...
								</p>

								<Button />
							</div>
						</li>
						<li className='card__item'>
							<img
								className='card__img'
								src={CardImage4}
								alt='Cat img'
								width='305'
								height='180'
							/>

							<div className='card__info'>
								<time
									className='card__date'
									dateTime='2020-08-28 18:00'>
									28.08.2020
								</time>

								<h3 className='card__heading'>
									Ультразвуковая чистка зубов
								</h3>

								<p className='card__description'>
									Появление в доме котенка приятное и радосное
									событие. Но не всегда этот пушистый зверек
									берется от ...
								</p>

								<Button />
							</div>
						</li>
						<li className='card__item'>
							<img
								className='card__img'
								src={CardImage5}
								alt='Cat img'
								width='305'
								height='180'
							/>

							<div className='card__info'>
								<time
									className='card__date'
									dateTime='2020-08-28 18:00'>
									28.08.2020
								</time>

								<h3 className='card__heading'>
									Ультразвуковая чистка зубов
								</h3>

								<p className='card__description'>
									Появление в доме котенка приятное и радосное
									событие. Но не всегда этот пушистый зверек
									берется от ...
								</p>

								<Button />
							</div>
						</li>
						<li className='card__item'>
							<img
								className='card__img'
								src={CardImage6}
								alt='Cat img'
								width='305'
								height='180'
							/>

							<div className='card__info'>
								<time
									className='card__date'
									dateTime='2020-07-21 18:00'>
									21.07.2020
								</time>

								<h3 className='card__heading'>
									Когда привавать питомца?
								</h3>

								<p className='card__description'>
									Появление в доме котенка приятное и радосное
									событие. Но не всегда этот пушистый зверек
									берется от ...
								</p>

								<Button />
							</div>
						</li>
						<li className='card__item'>
							<img
								className='card__img'
								src={CardImage7}
								alt='Cat img'
								width='305'
								height='180'
							/>

							<div className='card__info'>
								<time
									className='card__date'
									dateTime='2020-09-28 18:00'>
									28.09.2020
								</time>

								<h3 className='card__heading'>
									Как правильно купать животных
								</h3>

								<p className='card__description'>
									Появление в доме котенка приятное и радосное
									событие. Но не всегда этот пушистый зверек
									берется от ...
								</p>

								<Button />
							</div>
						</li>
						<li className='card__item'>
							<img
								className='card__img'
								src={CardImage8}
								alt='Cat img'
								width='305'
								height='180'
							/>

							<div className='card__info'>
								<time
									className='card__date'
									dateTime='2020-08-28 18:00'>
									28.08.2020
								</time>

								<h3 className='card__heading'>
									Ультразвуковая чистка зубов
								</h3>

								<p className='card__description'>
									Появление в доме котенка приятное и радосное
									событие. Но не всегда этот пушистый зверек
									берется от ...
								</p>

								<Button />
							</div>
						</li>
					</ul>

					<div className='blog-cards__btn'>
						<button className='main__btn main__btn--dark'>
							<LoadedIcon />
							Больше статей
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default BlogCards;
