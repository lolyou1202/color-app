import { FC } from 'react'
import './SingleColorInPalette.scss'
import { Ipalette } from '../../../redux/slices/paletteSlice'
import { AddColors } from '../../UI/addColors/AddColors'

interface ISingleColorInPalette {
	positionIndex: number
	singleColor: Ipalette
	positionInList: 'first' | 'between' | 'last'
	paletteLength: number
	onClickNumberOfAdding: (index: number, number: number) => void
}

export const SingleColorInPalette: FC<ISingleColorInPalette> = ({
	positionIndex,
	singleColor,
	positionInList,
	paletteLength,
	onClickNumberOfAdding,
}) => {
	return (
		<div
			className='singleColor'
			style={{
				background: `#${singleColor.HEX}`,
				width: 100 / paletteLength + 1 + '%',
				left: (100 * positionIndex) / paletteLength + '%',
			}}
		>
			{positionInList !== 'first' && (
				<AddColors
					positionIndex={positionIndex}
					paletteLength={paletteLength}
					onClickNumberOfAdding={onClickNumberOfAdding}
				/>
			)}
		</div>
	)
}
