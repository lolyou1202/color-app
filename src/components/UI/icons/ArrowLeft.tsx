import { FC } from 'react'

interface IArrowLeft {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const ArrowLeft: FC<IArrowLeft> = ({
	className,
	size = 40,
	stroke,
	strokeWidth,
	fill = 'none',
}) => {
	return (
		<svg
			className={className}
			width={`${size}`}
			height={`${size}`}
			viewBox='0 0 40 40'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M30 19.9999H10M10 19.9999L16.6667 13.3333M10 19.9999L16.6667 26.6666'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
