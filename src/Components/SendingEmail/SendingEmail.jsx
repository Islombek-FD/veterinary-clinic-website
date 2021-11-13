import './SendingEmail.scss';

function SendingEmail() {
	return (
		<>
			<section className='email'>
				<div className='container-sm'>
					<div className='email__content'>
						<h2 className='section__heading email__heading'>
							Будь в курсе событий
						</h2>

						<form className='email__form'>
							<input
								className='email__form-input'
								type='email'
								placeholder='Укажите Ваш email адрес'
							/>

							<button className='main__btn main__btn--dark'>
								Подписаться
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

export default SendingEmail;
