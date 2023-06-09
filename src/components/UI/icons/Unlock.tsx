import { FC } from 'react'

interface IUnlock {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Unlock: FC<IUnlock> = ({
	className,
	size = 30,
	stroke,
	strokeWidth,
	fill = 'none',
}) => {
	return (
		<svg
			className={className}
			width={`${size}`}
			height={`${size}`}
			viewBox='0 0 30 30'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M23.75 13.75H6.25C4.86929 13.75 3.75 14.8693 3.75 16.25V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V16.25C26.25 14.8693 25.1307 13.75 23.75 13.75Z'
				fill={stroke}
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.75 13.7499V8.74995C8.74845 7.20001 9.32285 5.70478 10.3617 4.55453C11.4006 3.40428 12.8298 2.68108 14.3719 2.52531C15.914 2.36954 17.4589 2.79233 18.7068 3.71159C19.9548 4.63085 20.8166 5.98101 21.125 7.49995'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
