import { FC } from 'react'

interface IHeart {
	className?: string
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Heart: FC<IHeart> = ({
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
				d='M26.0499 5.76246C25.4115 5.12372 24.6534 4.61702 23.8191 4.27132C22.9848 3.92561 22.0905 3.74768 21.1874 3.74768C20.2843 3.74768 19.39 3.92561 18.5557 4.27132C17.7214 4.61702 16.9634 5.12372 16.3249 5.76246L14.9999 7.08746L13.6749 5.76246C12.3853 4.47285 10.6362 3.74835 8.8124 3.74835C6.98861 3.74835 5.23952 4.47285 3.9499 5.76246C2.66029 7.05208 1.93579 8.80117 1.93579 10.625C1.93579 12.4488 2.66029 14.1978 3.9499 15.4875L5.2749 16.8125L14.9999 26.5375L24.7249 16.8125L26.0499 15.4875C26.6886 14.849 27.1953 14.091 27.541 13.2567C27.8868 12.4223 28.0647 11.5281 28.0647 10.625C28.0647 9.72185 27.8868 8.82759 27.541 7.99327C27.1953 7.15894 26.6886 6.40091 26.0499 5.76246V5.76246Z'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
