import './Header.scss';

import { NavLink } from 'react-router-dom';

import Logo from '../Lib/logo.jsx';
import HouseIcon from '../Lib/house.jsx';
import PhoneIcon from '../Lib/phone.jsx';
import ScheduleIcon from '../Lib/schedule.jsx';

import Button from '../Button/Button.jsx';

function Header() {
	return (
		<>
			<header className='header'>
				<div className='header__top'>
					<div className='container'>
						<div className='header__top-right'>
							<ul className='header__top-list'>
								<li className='header__top-item'>
									<HouseIcon />
									<span className='header__top-address'>
										г. Мариуполь, проспект Победы, 48а
									</span>
								</li>
								<li className='header__top-item'>
									<PhoneIcon />
									<ul className='header__top-contacts'>
										<li className='header__top-contact'>
											<a
												className='header__top-contact--link'
												href='tel:(067) 634 -75 - 74'>
												(067) 634 -75 - 74
											</a>
										</li>
										<li className='header__top-contact'>
											<a
												className='header__top-contact--link'
												href='tel:(0637) 57 - 01 - 31'>
												(0637) 57 - 01 - 31
											</a>
										</li>
										<li className='header__top-contact'>
											<a
												className='header__top-contact--link'
												href='tel:(098) 266 - 43 - 89'>
												(098) 266 - 43 - 89
											</a>
										</li>
									</ul>
								</li>
								<li className='header__top-item'>
									<ScheduleIcon />
									<ul className='header__top-times'>
										<li className='header__top-time'>
											<time>Пн - Пт 8:00 - 18:00</time>
										</li>
										<li className='header__top-time'>
											<time>Сб - Вс 8:00 - 14:00</time>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='header__bottom'>
					<div className='container'>
						<div className='header__bottom-content'>
							<NavLink className='header__bottom-logo' to='/'>
								<Logo />
							</NavLink>

							<nav className='header__bottom-nav'>
								<ul className='header__bottom-list'>
									<li className='header__bottom-item'>
										<NavLink
											className='header__bottom-link'
											to='/'>
											Главная
										</NavLink>
									</li>
									<li className='header__bottom-item'>
										<NavLink
											className='header__bottom-link'
											to='/about'>
											О Клинике
										</NavLink>
									</li>
									<li className='header__bottom-item'>
										<NavLink
											className='header__bottom-link'
											to='/services'>
											Наши Услуги
										</NavLink>
									</li>
									<li className='header__bottom-item'>
										<NavLink
											className='header__bottom-link'
											to='/articles'>
											Полезные Статьи
										</NavLink>
									</li>
									<li className='header__bottom-item'>
										<NavLink
											className='header__bottom-link'
											to='/faq'>
											FAQ
										</NavLink>
									</li>
									<li className='header__bottom-item'>
										<NavLink
											className='header__bottom-link'
											to='/contact'>
											Контакты
										</NavLink>
									</li>
								</ul>
							</nav>

							<Button />
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
