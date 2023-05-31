import { FC, useEffect, useState } from 'react'
import './PickerButtons.scss'
import { PrimaryButton } from '../../UI/primaryButton/PrimaryButton'

interface IPickerButtons {
	disabledButtons?: boolean
	onClickClear: () => void
	onClickSave: () => void
	onClickRandom: () => void
}

export const PickerButtons: FC<IPickerButtons> = ({
	disabledButtons,
	onClickClear,
	onClickSave,
	onClickRandom,
}) => {
	const [animation, setAnimation] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setAnimation(false)
		}, 400)
	}, [])

	return (
		<div
			className={'picker__buttons' + (animation ? ' animation' : '')}
			style={{ animationDelay: '0.4s' }}
		>
			<PrimaryButton
				className='picker__singleButton'
				display='flex'
				justifyContent='center'
				alignItems='center'
				onclick={() => onClickRandom()}
			>
				Random
			</PrimaryButton>
			<PrimaryButton
				className={
					'picker__singleButton' +
					(disabledButtons ? ' disabled' : '')
				}
				display='flex'
				justifyContent='center'
				alignItems='center'
				onclick={() => onClickSave()}
			>
				Save
			</PrimaryButton>
			<button
				className={
					'picker__singleButton transparent' +
					(disabledButtons ? ' disabled' : '')
				}
				onClick={() => onClickClear()}
			>
				Clear
			</button>
		</div>
	)
}
