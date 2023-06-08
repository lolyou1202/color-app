import { FC } from 'react'
import './PaletteButtons.scss'
import { Box } from '../icons/Box'
import { Redo } from '../icons/Redo'
import { Undo } from '../icons/Undo'
import { PrimaryButton } from '../primaryButton/PrimaryButton'

interface IPaletteNavigateButtons {
	generatingStatus?: boolean
	disabledUndo?: boolean
	disabledRedo?: boolean
	onClickUndo: () => void
	onClickRedo: () => void
	onClickGenerate: () => void
}

export const PaletteNavigateButtons: FC<IPaletteNavigateButtons> = ({
	generatingStatus,
	disabledUndo,
	disabledRedo,
	onClickUndo,
	onClickGenerate,
	onClickRedo,
}) => {
	return (
		<div className='palette__buttons-navigate'>
			<PrimaryButton
				disabled={disabledUndo}
				display='flex'
				justifyContent='center'
				alignItems='center'
				padding='16px'
				onclick={() => onClickUndo()}
			>
				<Undo size={40} stroke='var(--primary-dark)' strokeWidth={3} />
			</PrimaryButton>
			<PrimaryButton
				className='palette__buttons-generate'
				onclick={() => onClickGenerate()}
			>
				<p>{generatingStatus ? 'Loading' : 'Generate'}</p>
				<Box size={40} stroke='var(--primary-dark)' strokeWidth={3} />
			</PrimaryButton>
			<PrimaryButton
				disabled={disabledRedo}
				display='flex'
				justifyContent='center'
				alignItems='center'
				padding='16px'
				onclick={() => onClickRedo()}
			>
				<Redo size={40} stroke='var(--primary-dark)' strokeWidth={3} />
			</PrimaryButton>
		</div>
	)
}
