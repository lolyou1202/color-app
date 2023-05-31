import { FC } from 'react'

interface ISuccess {
	size?: number
	fill?: string
	className?: string
}

export const Success: FC<ISuccess> = ({
	size = 40,
	fill = 'none',
	className
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
				fillRule='evenodd'
				clipRule='evenodd'
				d='M20 37C29.3888 37 37 29.3888 37 20C37 10.6112 29.3888 3 20 3C10.6112 3 3 10.6112 3 20C3 29.3888 10.6112 37 20 37ZM28.2394 17.0815C28.8367 16.5074 28.8555 15.5579 28.2815 14.9606C27.7074 14.3633 26.7579 14.3445 26.1606 14.9185L18.044 22.7195L13.8394 18.6785C13.2421 18.1044 12.2926 18.1233 11.7185 18.7205C11.1445 19.3178 11.1633 20.2674 11.7606 20.8414L17.0045 25.8815C17.5851 26.4395 18.5028 26.4395 19.0834 25.8815L28.2394 17.0815Z'
			/>
		</svg>
	)
}
