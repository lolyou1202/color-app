import { FC } from 'react'

interface IUndo {
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Undo: FC<IUndo> = ({
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
				d='M6.6665 13.3334H22.9165C27.749 13.3334 31.6665 17.2509 31.6665 22.0834C31.6665 26.9158 27.749 30.8334 22.9165 30.8334H12.4998M6.6665 13.3334L13.3332 6.66669M6.6665 13.3334L13.3332 20'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
