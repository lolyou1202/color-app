import { FC } from 'react'
import './PrimaryButton.scss'

interface IPrimaryButton {
	variant?: 'filled' | 'transparent'
	size?: 'small' | 'regular' | 'large'
	disabled?: boolean
	className?: string
	display?: string
	gridTemplateColumns?: string
	alignItems?: string
	justifyContent?: string
	position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
	background?: string
	boxShadow?: string
	padding?: string
	width?: string
	height?: string
	overflow?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
	onclick?: () => void
	onMouseLeave?: () => void
	children?: React.ReactNode
}

export const PrimaryButton: FC<IPrimaryButton> = ({
	variant = 'filled',
	size = 'regular',
	disabled,
	className,
	display,
	gridTemplateColumns,
	alignItems,
	justifyContent,
	background,
	position,
	boxShadow,
	padding,
	width,
	height,
	overflow = 'visible',
	onclick,
	onMouseLeave,
	children,
}) => {
	return (
		<button
			className={
				`primaryButton ${variant}` +
				(className ? ` ${className}` : '') +
				(disabled ? ' disabled' : '')
			}
			style={{
				display: display,
				gridTemplateColumns: gridTemplateColumns,
				alignItems: alignItems,
				justifyContent: justifyContent,
				background: `#${background}`,
				position: position,
				boxShadow: boxShadow,
				padding: padding,
				width: width,
				height: height,
				overflow: overflow,
			}}
			onClick={onclick}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</button>
	)
}
