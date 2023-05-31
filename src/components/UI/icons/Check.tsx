import { FC } from 'react'

interface ITrash {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Check: FC<ITrash> = ({
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
				d='M24 10L12.5549 21L6 14.7'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
