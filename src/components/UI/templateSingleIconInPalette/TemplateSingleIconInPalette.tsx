import { FC, ReactNode } from 'react'
import './TemplateSingleIconInPalette.scss'
import { AppTooltip } from '../tooltip/AppTooltip'

interface ITemplateSingleIconInPalette {
	children?: ReactNode
	label: string
	className?: string
	onClick?: () => void
}

export const TemplateSingleIconInPalette: FC<ITemplateSingleIconInPalette> = ({
	children,
	label,
	className,
	onClick,
}) => {
	return (
		<AppTooltip
			label={label}
			fontSize={20}
			padding='4px 16px 6px'
			marginBottom={0}
			borderRadius={8}
		>
			<div
				className={
					'singleColor__mask-singleIcon' +
					(className ? className : '')
				}
				onClick={onClick}
			>
				{children}
			</div>
		</AppTooltip>
	)
}
