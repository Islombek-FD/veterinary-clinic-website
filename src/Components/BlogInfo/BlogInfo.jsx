import './BlogInfo.scss';
import Button from '../Button/Button.jsx';

import DogsImage from '../../Assets/Images/blog_info_dogs.png';

function BlogInfo() {
	return (
		<>
			<section className='blog-info'>
				<div className='container'>
					<h2 className='section__heading visually-hidden'>
						Information about animals
					</h2>

					<div className='blog-info__content'>
						<img
							src={DogsImage}
							alt='Dogs imgs'
							width='558'
							height='525'
						/>

						<div className='blog-info__text'>
							<div className='blog-info__text-header'>
								<ul className='blog-info__text-list'>
									<li className='blo-info__text-item'>
										<a
											className='blog-info__text-link'
											href='#link'
											target='__blank'>
											#собака
										</a>
									</li>
									<li className='blo-info__text-item'>
										<a
											className='blog-info__text-link'
											href='#link'
											target='__blank'>
											#дом
										</a>
									</li>
									<li className='blo-info__text-item'>
										<a
											className='blog-info__text-link'
											href='#link'
											target='__blank'>
											#уход
										</a>
									</li>
								</ul>

								<time dateTime='2020-08-29 18:00'>
									29.08.2020
								</time>
							</div>

							<h3 className='blog-info__text-heading'>
								Перед тем как завести собаку
							</h3>

							<p className='blog-info__text-description'>
								Появление в доме котенка приятное и радосное
								событие. Но не всегда этот пушистый зверек
								берется от заводчиков, Бивают и ситуации когда
								животное находят на улице и дают ему теплый дом.
								И первым вопросом, который возникает у новых
								хозяев – как определить возраст котенка.
								Появление в доме котенка приятное и радосное
								событие. Появление в доме котенка приятное и
								радосное событие. Но не всегда этот пушистый
								зверек берется от заводчиков, Бивают и ситуации
								когда животное находят на улице и дают ему
								теплый дом.
							</p>

							<Button />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default BlogInfo;
