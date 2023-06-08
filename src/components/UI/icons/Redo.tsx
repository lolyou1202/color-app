import { FC } from 'react'

interface IRedo {
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Redo: FC<IRedo> = ({
	size = 40,
	stroke,
	strokeWidth,
	fill = 'none',
}) => {
	return (
		<svg
			width={`${size}`}
			height={`${size}`}
			viewBox='0 0 40 40'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M31.6667 13.3334H15.4168C10.5843 13.3334 6.66675 17.2509 6.66675 22.0834C6.66675 26.9158 10.5843 30.8334 15.4168 30.8334H25.8334M31.6667 13.3334L25.0001 6.66669M31.6667 13.3334L25.0001 20'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
