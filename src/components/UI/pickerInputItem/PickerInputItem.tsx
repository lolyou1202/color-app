import { FC, ReactNode, useEffect, useState } from 'react'
import './PickerInputItem.scss'
import { Copy } from '../icons/Copy'
import { AppTooltip } from '../tooltip/AppTooltip'
import { Toast } from '../toast/Toast'
import { useToast } from '@chakra-ui/react'

interface IPickerInputItem {
	mainColor: string
	contrastColor: string
	text: string
	onChange: (value: string) => void
	children?: ReactNode
	placeholder?: string
	animationDelay?: string
}

export const PickerInputItem: FC<IPickerInputItem> = ({
	mainColor,
	contrastColor,
	text,
	onChange,
	children,
	placeholder,
	animationDelay,
}) => {
	const [placeholderState, setPlaceholderState] = useState(true)
	const [animation, setAnimation] = useState(true)

	const toast = useToast()

	const onCopyClick = (color: string) => {
		navigator.clipboard.writeText(color)
		toast({
			render: () => (
				<Toast
					variant='regular'
					text={`Сolor #${color} copied to the clipboard`}
				/>
			),
		})
	}

	useEffect(() => {
		setTimeout(() => {
			setAnimation(false)
		}, 400)
	}, [])

	useEffect(() => {
		if (text) {
			setPlaceholderState(false)
		} else {
			setPlaceholderState(true)
		}
	}, [text])

	return (
		<div
			className={
				'picker__inputItem primaryButton' +
				(animation ? ' animation' : '')
			}
			style={{
				background: mainColor ? `#${mainColor}` : '',
				animationDelay: animationDelay,
			}}
		>
			{children}
			<input
				className='picker__inputItem-input'
				type='text'
				value={text}
				onChange={event =>
					onChange(event.target.value)
				}
				style={{ color: contrastColor }}
				spellCheck='false'
			/>
			<span
				className={
					'picker__inputItem-placeholder' +
					(placeholderState ? ' visible' : ' invisible')
				}
				style={{ color: contrastColor }}
			>
				{placeholder}
			</span>
			<AppTooltip label='Copy'>
				<button
					className='picker__inputItem-copy'
					onClick={e => {
						e.preventDefault()
						onCopyClick(text)
					}}
				>
					<Copy size={40} stroke={contrastColor} strokeWidth={3} />
				</button>
			</AppTooltip>
		</div>
	)
}
