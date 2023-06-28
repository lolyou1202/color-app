import { FC, useEffect, useState } from 'react'
import { PaletteNavigateButtons } from './PaletteNavigateButtons'
import { PaletteOptionsButtons } from './PaletteOptionsButtons'

interface IPaletteButtons {
	generatingStatus?: boolean
	onClickGenerate: () => void
	animationDelay?: string
}

export const PaletteButtons: FC<IPaletteButtons> = ({
	generatingStatus,
	onClickGenerate,
	animationDelay
}) => {
	const [animation, setAnimation] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setAnimation(false)
		}, 400)
	}, [])

	return (
		<div
			className={'palette__buttons' + (animation ? ' animation' : '')}
			style={{
				animationDelay: animationDelay,
			}}
		>
			<PaletteNavigateButtons
				generatingStatus={generatingStatus}
				disabledUndo={true}
				disabledRedo={true}
				onClickGenerate={onClickGenerate}
				onClickRedo={() => {}}
				onClickUndo={() => {}}
			/>
			<PaletteOptionsButtons
				disabledSave={false}
				onClickSave={() => {}}
				onClickSettings={() => {}}
			/>
		</div>
	)
}
