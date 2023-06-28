import { FC } from 'react'

interface ICross {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Cross: FC<ICross> = ({
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
				d='M5 25L15 15M15 15L25 5M15 15L25 25M15 15L5 5'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
