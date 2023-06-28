import { FC, ReactNode } from 'react'
import './AppTooltip.scss'
import { Tooltip } from '@chakra-ui/react'

interface IAppTooltip {
	children: ReactNode
	label: string
	fontSize?: number
	fontWeight?: number
	lineHeight?: string
	color?: string
	padding?: string
	marginBottom?: number
	borderRadius?: number
}

export const AppTooltip: FC<IAppTooltip> = ({
	children,
	label,
	fontSize = 24,
	fontWeight = 700,
	lineHeight = '100%',
	color = '#fff',
	padding = '6px 30px 10px',
	marginBottom = 24,
	borderRadius = 12
}) => {
	return (
		<Tooltip
			className='tooltip'
			label={label}
			placement='top'
			openDelay={500}
			position='relative'
			zIndex={100}
			background='rgba(53, 53, 53, .5)'
			borderRadius={borderRadius}
			boxShadow='none'
			fontFamily='Degular'
			fontWeight={fontWeight}
			fontSize={fontSize}
			lineHeight={lineHeight}
			color={color}
			padding={padding}
			marginBottom={`${marginBottom}px`}
			textTransform='capitalize'
		>
			{children}
		</Tooltip>
	)
}
