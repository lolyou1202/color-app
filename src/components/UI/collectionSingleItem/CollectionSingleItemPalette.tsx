import { FC } from 'react'
import { PrimaryButton } from '../primaryButton/PrimaryButton'
import { ICollectionPalettes } from '../../../redux/slices/palettesStoreSlice'
import { CollectionColorInPalette } from '../collectionColorInContainer/CollectionColorInPalette'

interface ICollectionSingleItemPalette {
	palette: ICollectionPalettes
}

export const CollectionSingleItemPalette: FC<ICollectionSingleItemPalette> = ({
	palette,
}) => {
	return (
		<PrimaryButton
			className='colorContainer'
			display='flex'
			position='relative'
			width='100%'
			height='144px'
		>
			{palette.hex.map(colorInPalette => (
				<CollectionColorInPalette
					key={colorInPalette}
					colorInPalette={colorInPalette}
				/>
			))}
		</PrimaryButton>
	)
}
