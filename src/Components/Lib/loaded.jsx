function LoadedIcon() {
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				style={{
					margin: 'auto',
					background: 'transparrent',
					display: 'block',
					shapeRendering: 'auto',
				}}
				width='25px'
				height='25px'
				viewBox='0 0 100 100'
				preserveAspectRatio='xMidYMid'>
				<g>
					<path
						d='M50 20A30 30 0 1 0 71.21320343559643 28.78679656440358'
						fill='none'
						stroke='#fff'
						strokeWidth={7}
					/>
					<path d='M49 12L49 28L57 20L49 12' fill='#fff' />
					<animateTransform
						attributeName='transform'
						type='rotate'
						repeatCount='indefinite'
						dur='1.0204081632653061s'
						values='0 50 50;360 50 50'
						keyTimes='0;1'
					/>
				</g>
				;
			</svg>
		</>
	);
}

export default LoadedIcon;
