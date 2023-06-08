import { FC, useCallback, useEffect } from 'react'
import './Dashboard.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { SingleColorInPalette } from '../singleColorInPalette/SingleColorInPalette'
import { addColorsBetweenColors, fillPalette } from '../../../redux/slices/paletteSlice'
import { useParams } from 'react-router-dom'

export const Dashboard: FC = () => {
	const { paletteId } = useParams()
	const urlPaletteArray = paletteId?.split('-')
	console.log(urlPaletteArray)

	const { palette } = useAppSelector(store => store.pickerPalette)

	const dispatch = useAppDispatch()

	const getPositionInList = useCallback(
		(index: number) => {
			switch (true) {
				case index === 0:
					return 'first'
				case palette.length - 1 !== index && index !== 0:
					return 'between'
				case palette.length - 1 === index:
					return 'last'
				default:
					return 'last'
			}
		},
		[palette.length]
	)

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

	useEffect(() => {
		//dispatch(fillPalette(urlPaletteArray || []))
	}, [dispatch, urlPaletteArray])

	//useEffect(() => {
		
	//}, [])

	return (
		<div className='dashboard primaryButton'>
			{palette.map((singleColor, index) => (
				<SingleColorInPalette
					key={singleColor.id}
					positionIndex={index}
					singleColor={singleColor}
					positionInList={getPositionInList(index)}
					paletteLength={palette.length}
					onClickNumberOfAdding={onClickNumberOfAdding}
				/>
			))}
		</div>
	)
}
