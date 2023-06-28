import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { EnumLocation, updateLocation } from '../redux/slices/locationSlice'
import { PaletteButtons } from '../components/UI/paletteButtons/PaletteButtons'
import { Dashboard } from '../components/basic/dashboard/Dashboard'
import {
	addColorsBetweenColors,
	fetchPalette,
} from '../redux/slices/paletteSlice'
import { useGeneratePaletteTemplate } from '../hooks/useGeneratePaletteTemplate'
import { useGenerateMatrixOfPalette } from '../hooks/useGenerateMatrixOfPalette'

export const Palette: FC = () => {
	const { palette, loading } = useAppSelector(store => store.pickerPalette)

	const dispatch = useAppDispatch()

	const fetchPaletteTemplate = useGeneratePaletteTemplate()
	const fetchPaletteAdjacency = useGenerateMatrixOfPalette()

	const onClickNumberOfAdding = (index: number, number: number) => {
		dispatch(
			addColorsBetweenColors({
				index,
				number,
				firstColor: palette[index].HEX,
				lastColor: palette[index + 1].HEX,
			})
		)
	}

	const onClickGenerate = () => {
		if (palette.length < 2) {
			dispatch(
				fetchPalette({
					numColors: 5,
					adjacency: fetchPaletteAdjacency([0, 0, 0, 0, 0], 60),
					palette: fetchPaletteTemplate([]),
				})
			)
		} else {
			dispatch(
				fetchPalette({
					numColors: palette.length,
					adjacency: fetchPaletteAdjacency(palette, 60),
					palette: fetchPaletteTemplate(palette),
				})
			)
		}
	}

	useEffect(() => {
		dispatch(updateLocation(EnumLocation.palette))
	}, [dispatch])

	return (
		<div className='palette'>
			<Dashboard
				onClickNumberOfAdding={onClickNumberOfAdding}
				animationDelay='0.0s'
			/>
			<PaletteButtons
				onClickGenerate={onClickGenerate}
				generatingStatus={loading}
				animationDelay='0.2s'
			/>
		</div>
	)
}
