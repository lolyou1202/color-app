import { FC } from 'react'

interface ISettings {
	size?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
}

export const Settings: FC<ISettings> = ({
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
				d='M20.0178 35H19.5711C18.093 35 16.8948 33.8018 16.8948 32.3237C16.8948 31.4889 16.5053 30.702 15.8415 30.1957L14.1131 28.8775C13.1337 28.1306 11.8046 28.0355 10.7288 28.6355L10.67 28.6683C9.24152 29.465 7.43851 28.9821 6.59941 27.5782C5.72404 26.1135 6.23245 24.2151 7.72268 23.3839L7.79929 23.3412C8.78423 22.7918 9.39467 21.7524 9.39467 20.6246V19.3762C9.39467 18.2484 8.78423 17.209 7.79929 16.6597L7.72268 16.6169C6.23245 15.7858 5.72404 13.8874 6.59942 12.4227C7.43851 11.0187 9.24152 10.5358 10.67 11.3325L10.8964 11.4588C11.8934 12.0149 13.1072 12.0148 14.1041 11.4588L15.3108 10.7857C16.2888 10.2402 16.8948 9.20819 16.8948 8.08844C16.8948 6.38274 18.2947 5 20.0004 5C21.706 5 23.1059 6.38273 23.1059 8.08841C23.1059 9.20813 23.7119 10.2401 24.6898 10.7856L25.8965 11.4587C26.8934 12.0148 28.1072 12.0148 29.1041 11.4588L29.3304 11.3325C30.7589 10.5358 32.5619 11.0187 33.401 12.4227C34.2763 13.8873 33.7679 15.7858 32.2777 16.6169L32.2011 16.6597C31.2161 17.209 30.6057 18.2484 30.6057 19.3762V20.6246C30.6057 21.7524 31.2161 22.7918 32.2011 23.3412L32.2777 23.3839C33.7679 24.2151 34.2763 26.1135 33.401 27.5782C32.5619 28.9821 30.7589 29.465 29.3304 28.6683L29.104 28.542C28.1071 27.986 26.8934 27.986 25.8965 28.542L24.6898 29.215C23.7119 29.7603 23.1059 30.7923 23.1059 31.9119C23.1059 33.6174 21.7233 35 20.0178 35Z'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
			/>
			<path
				d='M25.0006 20C25.0006 22.7614 22.762 25 20.0006 25C17.2392 25 15.0006 22.7614 15.0006 20C15.0006 17.2386 17.2392 15 20.0006 15C22.762 15 25.0006 17.2386 25.0006 20Z'
				stroke={stroke}
				strokeWidth={`${strokeWidth}`}
			/>
		</svg>
	)
}