import { FC } from 'react'

interface IImport {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Import: FC<IImport> = ({
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
				d='M6.24995 12.0833V7.08333C6.24995 5.24238 7.74234 3.75 9.58329 3.75H22.9167C24.7576 3.75 26.25 5.24238 26.25 7.08333V20.4167C26.25 22.2576 24.7576 23.75 22.9167 23.75H17.9166M3.75 26.25L12.0834 17.9167M12.0834 17.9167H5.41667M12.0834 17.9167L12.0833 24.5834'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
