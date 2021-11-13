import './FaqHero.scss';

import DocumentIcon from '../Lib/document.jsx';
import PetIcon from '../Lib/pet.jsx';
import ArrowIcon from '../Lib/arrow.jsx';
import ClockIcon from '../Lib/clock.jsx';

function FaqHero() {
	return (
		<>
			<section className='faq-hero'>
				<div className='container-lg'>
					<div className='faq-hero__content'>
						<h2 className='main__heading'>FAQ</h2>
						<p className='main__description faq-hero__description'>
							Узнать информацию о наших услугах, записаться на
							прием к врачу или проконсультироваться вы можете по
							телефону, в любое удобное для вас время.
						</p>
						<buttom className='main__btn main__btn--primary'>
							<DocumentIcon />
							Задать вопрос
						</buttom>

						<ul className='faq-hero__list'>
							<li className='faq-hero__item'>
								<PetIcon /> <br />
								<time dateTime='faq-hero__item-date'>
									01.09.2020
								</time>
								<br />
								<strong className='faq-hero__item-title'>
									Пономаренко Наталия
								</strong>{' '}
								<br />
								<h3 className='faq-hero__item-heading'>
									Как часто следует проводить обработки от
									блох и клещей?
								</h3>
								<p className='faq-hero__item-description'>
									Самые качественные капли от блох и клещей
									как правило действуют не более одного
									месяца. Поэтому собак и кошек следует
									обрабатывать от блох именно с такой
									периодичностью. Обработки
									противопаразитарными каплями особенно
									актуальны для собак в период с марта по
									декабрь, когда активизируют свою активность
									клещи. Подобрать препарат от блох и клещей
									Вам помогут в ветеринарном комплексе
									“Передовой”. Также здесь Вам помогут в
									расчёте дозировки этих препаратов.
								</p>
							</li>
							<li className='faq-hero__item'>
								<div className='faq-hero__item-header'>
									<PetIcon color={'#78C0DE'} />
									<time
										className='faq-hero__item-date'
										dateTime='2020-09-01 18:00'>
										01.09.2020
									</time>
									<strong className='faq-hero__item-title'>
										Пономаренко Наталия
									</strong>
								</div>
								<h3 className='faq-hero__item-heading'>
									Может ли кошка или собака никогда не
									выходящая из дома подхватить блох?
								</h3>
								<ArrowIcon />
								<ClockIcon />
							</li>
							<li className='faq-hero__item'>
								<div className='faq-hero__item-header'>
									<PetIcon />
									<time
										className='faq-hero__item-date'
										dateTime='2020-09-01 18:00'>
										01.09.2020
									</time>
									<strong className='faq-hero__item-title'>
										Пономаренко Наталия
									</strong>
								</div>
								<h3 className='faq-hero__item-heading'>
									Может ли кошка или собака никогда не
									выходящая из дома подхватить блох?
								</h3>
								<ArrowIcon />
								<ClockIcon />
							</li>
							<li className='faq-hero__item'>
								<div className='faq-hero__item-header'>
									<PetIcon color={'#78C0DE'} />
									<time
										className='faq-hero__item-date'
										dateTime='2020-09-01 18:00'>
										01.09.2020
									</time>
									<strong className='faq-hero__item-title'>
										Пономаренко Наталия
									</strong>
								</div>
								<h3 className='faq-hero__item-heading'>
									Чем очищать глаза собаке или кошке?
								</h3>
								<ArrowIcon />
								<ClockIcon />
							</li>
							<li className='faq-hero__item'>
								<div className='faq-hero__item-header'>
									<PetIcon />
									<time
										className='faq-hero__item-date'
										dateTime='2020-08-31 18:00'>
										31.08.2020
									</time>
									<strong className='faq-hero__item-title'>
										Пономаренко Наталия
									</strong>
								</div>
								<h3 className='faq-hero__item-heading'>
									Чем лучше кормить – натуральным или готовым
									кормом?
								</h3>
								<ArrowIcon />
								<ClockIcon />
							</li>
							<li className='faq-hero__item'>
								<div className='faq-hero__item-header'>
									<PetIcon color={'#78C0DE'} />
									<time
										className='faq-hero__item-date'
										dateTime='2020-08-27 18:00'>
										27.08.2020
									</time>
									<strong className='faq-hero__item-title'>
										Пономаренко Наталия
									</strong>
								</div>
								<h3 className='faq-hero__item-heading'>
									Зачем нужны витамины и в каком возрасте их
									нужно давать?
								</h3>
								<ArrowIcon />
								<ClockIcon />
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default FaqHero;
