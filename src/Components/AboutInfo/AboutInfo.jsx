import './AboutInfo.scss';

import SchoolImage from '../../Assets/Images/about__school.png';
import DogImage from '../../Assets/Images/about_info_dog.png';

function AboutInfo() {
	return (
		<>
			<section className='about-info'>
				<div className='container-lg'>
					<h2 className='section__heading visually-hidden'>
						Info About Veterinary Clinic
					</h2>

					<div className='about-info__house'>
						<img
							src={SchoolImage}
							alt='School img'
							width='685'
							height='449'
						/>

						<div className='about-info__house-content'>
							<p className='about-info__house-text'>
								Принимая решение о том, чтобы завести{' '}
								<span className='about-info__house-text--warning'>
									домашнего любимца
								</span>
								, или уже имея его, мы не должны забывать, что
								животное это живой организм, который требует не
								только нашей любви, а и заботы о её здоровье и
								внешнем виде.
								<span className='about-info__house-text--warning'>
									Ответственность
								</span>{' '}
								хозяина заключается в чётком выполнении правил
								по уходу за животным, своевременного обращения к
								врачу за консультацией и помощи в решении любого
								вопроса. Ведь мы в ответе за тех, кого
								приручили!
							</p>
						</div>
					</div>

					<div className='about-info__dog'>
						<div className='about-info__dog-content'>
							<p className='about-info__dog-text'>
								Ветеринарная клиника предоставляет широкий
								спектр услуг, начиная от простых
								профилактических мероприятий до сложных
								хирургических вмешательств. Мы проводим
								рентгенографические, ультразвуковые
								исследования.Проводится анализ крови как
								общеклинический, так и биохимический. Проводится
								общий анализ мочи с микроскопией осадка.
							</p>
							<p className='about-info__dog-text'>
								Только у нас Вы можете провести анализ крови
								кошек на такие заболевания как панлейкопения,
								кальцивироз, герпесвирусная инфекция,
								короновироз, токсоплазмоз и хламидиоз. А также
								собак на такие заболевания как инфекционный
								гепатит, парвовирусный энтерит, чума плотоядных.
								С полным спектром услуг можно ознакомиться
								здесь.
							</p>
						</div>
						<img
							src={DogImage}
							alt='Dog img'
							width='797'
							height='532'
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutInfo;
