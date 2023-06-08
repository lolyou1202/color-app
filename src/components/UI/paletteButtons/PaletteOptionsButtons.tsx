import { FC, useState } from 'react'
import { PrimaryButton } from '../primaryButton/PrimaryButton'
import { Settings } from '../icons/Settings'
import { Check } from '../icons/Check'

interface IPaletteOptionsButtons {
	disabledSave?: boolean
	onClickSave: () => void
	onClickSettings: () => void
}

export const PaletteOptionsButtons: FC<IPaletteOptionsButtons> = ({
	disabledSave,
	onClickSave,
	onClickSettings,
}) => {
	const [saveAnimation, setSaveAnimation] = useState(false)

	return (
		<div className='palette__buttons-options'>
			<PrimaryButton
				className='palette__buttons-save'
				disabled={disabledSave}
				onclick={() => {
					setSaveAnimation(true)
					setTimeout(() => {
						setSaveAnimation(false)
					}, 2000);
					onClickSave()
				}}
			>
				<p className={saveAnimation ? ' animation' : ''}>Save</p>
				<Check
					className={
						'palette__buttons-saveCheck' +
						(saveAnimation ? ' animation' : '')
					}
					size={40}
					stroke='var(--primary-dark)'
					strokeWidth={3}
				/>
			</PrimaryButton>
			<PrimaryButton
				display='flex'
				justifyContent='center'
				alignItems='center'
				padding='16px'
				onclick={() => onClickSettings()}
			>
				<Settings
					size={40}
					stroke='var(--primary-dark)'
					strokeWidth={3}
				/>
			</PrimaryButton>
		</div>
	)
}