import { FC } from "react"
import { PaletteNavigateButtons } from "./PaletteNavigateButtons"
import { PaletteOptionsButtons } from "./PaletteOptionsButtons"

export const PaletteButtons: FC = () => {
	return (
		<div className='palette__buttons'>
			<PaletteNavigateButtons
				disabledUndo={true}
				disabledRedo={true}
				onClickGenerate={() => {}}
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
