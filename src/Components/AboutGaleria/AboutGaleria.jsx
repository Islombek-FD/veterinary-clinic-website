import React from 'react';
import './AboutGaleria.scss';
import TinySlider from 'tiny-slider-react';

import ArrowIcon from '../Lib/arrow.jsx';

import GaleriaDoctor from '../../Assets/Images/about_gaeria_doctor.png';
import GaleriaCat from '../../Assets/Images/about_galeria_cat.png';
import GaleriaCat1 from '../../Assets/Images/about_galeria_cat1.png';
import GaleriaDog from '../../Assets/Images/about_galeria_dog.png';
import GaleriaDog1 from '../../Assets/Images/about_galeria_dog1.png';
import GaleriaDog2 from '../../Assets/Images/about_galeria_dog2.png';
import GaleriaDog3 from '../../Assets/Images/about_galeria_dog3.png';
import GaleriaMouse from '../../Assets/Images/about_galeria_mouse.png';

function AboutGaleria() {
	const [count, setCount] = React.useState(1);

	const settings = {
		container: '.about-galeria__slider',
		controlsContainer: '.about-galeria__slider-controlles',
		items: 3,
		slideBy: 1,
		gutter: 20,
		nav: false,
		loop: true,
		autoplayTimeout: 2000,
	};

	const handleNext = () => {
		if (count > 1) {
			setCount(count - 1);
		} else {
			setCount(8);
		}
	};

	const handlePrev = () => {
		if (count < 8) {
			setCount(count + 1);
		} else {
			setCount(1);
		}
	};

	return (
		<>
			<section className='about-galeria'>
				<div className='container-lg'>
					<div className='about-galeria__content'>
						<div className='about-galeria__info'>
							<h2 className='section__heading about-galeria__heading'>
								Хочешь подстричь{' '}
								<span className='about-galeria__heading-warning'>
									питомца?
								</span>
							</h2>

							<p className='section__description about-galeria__description'>
								В лечебнице работает кабинет груммера, после
								посещения которого, Ваш любимец будет особенно
								неотразим и привлекателен.
							</p>
							<div className='about-galeria__slider-controlles'>
								<button
									onClick={handleNext}
									className='arrow__next next'>
									<ArrowIcon />
								</button>
								<button
									onClick={handlePrev}
									className='arrow__prev prev'>
									<ArrowIcon />
								</button>

								<span className='about-galeria__index'>
									{count} / 8
								</span>
							</div>
						</div>

						<ul className='about-galeria__slider'>
							<TinySlider settings={settings}>
								<li>
									<img
										className='about-galeria__slider-img'
										src={GaleriaDoctor}
										alt='Doctor and dog img'
										width='307'
										height='400'
									/>
								</li>
								<li>
									<img
										className='about-galeria__slider-img'
										src={GaleriaCat}
										alt='Doctor and dog img'
										width='307'
										height='400'
									/>
								</li>
								<li>
									<img
										className='about-galeria__slider-img'
										src={GaleriaCat1}
										alt='Doctor and dog img'
										width='307'
										height='400'
									/>
								</li>
								<li>
									<img
										className='about-galeria__slider-img'
										src={GaleriaDog}
										alt='Doctor and dog img'
										width='307'
										height='400'
									/>
								</li>
								<li>
									<img
										className='about-galeria__slider-img'
										src={GaleriaDog1}
										alt='Doctor and dog img'
										width='307'
										height='400'
									/>
								</li>
								<li>
									<img
										className='about-galeria__slider-img'
										src={GaleriaDog2}
										alt='Doctor and dog img'
										width='307'
										height='400'
									/>
								</li>
								<li>
									<img
										className='about-galeria__slider-img'
										src={GaleriaDog3}
										alt='Doctor and dog img'
										width='307'
										height='400'
									/>
								</li>
								<li>
									<img
										className='about-galeria__slider-img'
										src={GaleriaMouse}
										alt='Doctor and dog img'
										width='307'
										height='400'
									/>
								</li>
							</TinySlider>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutGaleria;
