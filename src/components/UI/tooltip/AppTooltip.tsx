import { FC, ReactNode } from 'react'
import './AppTooltip.scss'
import { Tooltip } from '@chakra-ui/react'

interface IAppTooltip {
	children: ReactNode
}

export const AppTooltip: FC<IAppTooltip> = ({ children }) => {
	return (
		<Tooltip
			className='tooltip'
			label='Copy'
			placement='top'
			openDelay={500}
			position='relative'
			zIndex={100}
			background='rgba(53, 53, 53, .5)'
			borderRadius={12}
			boxShadow='none'
			fontFamily='Degular'
			fontWeight='bold'
			fontSize={24}
			lineHeight='100%'
			color='#fff'
			padding='6px 30px 10px'
			marginBottom='24px'
		>
			{children}
		</Tooltip>
	)
}
