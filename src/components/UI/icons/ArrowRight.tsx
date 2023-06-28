import { FC } from 'react'

interface IArrowRight {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const ArrowRight: FC<IArrowRight> = ({
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
				d='M10 19.9999L30 19.9999M30 19.9999L23.3333 13.3333M30 19.9999L23.3333 26.6666'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
