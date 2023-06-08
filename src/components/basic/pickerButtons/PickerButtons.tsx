import { FC, useCallback, useEffect, useState } from 'react'
import './PickerButtons.scss'
import { PrimaryButton } from '../../UI/primaryButton/PrimaryButton'
import { useAppSelector } from '../../../redux/hooks'
import { isValidateHEX } from '../../../hooks/functions/isValidateHEX'
import { Check } from '../../UI/icons/Check'

interface IPickerButtons {
	HEXInputState: string
	onClickClear: () => void
	onClickSave: () => void
	onClickRandom: () => void
}

export const PickerButtons: FC<IPickerButtons> = ({
	HEXInputState,
	onClickClear,
	onClickSave,
	onClickRandom,
}) => {
	const [saveAnimation, setSaveAnimation] = useState(false)

	const collectionColors = useAppSelector(
		store => store.collectionColors.collectionColors
	)
	const loading = useAppSelector(store => store.pickerColor.loading)

	const [animation, setAnimation] = useState(true)

	const colorInCollection = useCallback(() => {
		const isValid = isValidateHEX(HEXInputState)
		
		if (!isValid) {
			return true
		}

		for (let index = 0; index < collectionColors.length; index++) {
			if (collectionColors[index].hex.includes(isValid[0])) {
				return true
			}
		}
		return false
	}, [collectionColors, HEXInputState])

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
				<p>{loading ? 'Loading' : 'Random'}</p>
			</PrimaryButton>
			<PrimaryButton
				className={
					'picker__singleButton' +
					(HEXInputState && !colorInCollection() ? '' : ' disabled') +
					(animation ? ' animation' : '')
				}
				display='flex'
				justifyContent='center'
				alignItems='center'
				onclick={() => {
					setSaveAnimation(true)
					setTimeout(() => {
						setSaveAnimation(false)
					}, 2000)
					onClickSave()
				}}
			>
				<p className={saveAnimation ? ' animation' : ''}>Save</p>
				<Check
					className={
						'picker__singleButton-saveCheck' +
						(saveAnimation ? ' animation' : '')
					}
					size={40}
					stroke='var(--primary-dark)'
					strokeWidth={3}
				/>
			</PrimaryButton>
			<button
				className={
					'picker__singleButton transparent' +
					(HEXInputState ? '' : ' disabled')
				}
				onClick={() => onClickClear()}
			>
				<p>Clear</p>
			</button>
		</div>
	)
}
