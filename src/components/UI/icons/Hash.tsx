import { FC } from 'react'

interface IHash {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Hash: FC<IHash> = ({
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
				d='M6.66666 15H33.3333'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M6.66666 25H33.3333'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16.6667 5L13.3333 35'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M26.6667 5L23.3333 35'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
