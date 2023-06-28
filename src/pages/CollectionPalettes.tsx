import { FC, useEffect } from 'react'
import { Sidebar } from '../components/basic/sidebar/Sidebar'
import { CollectionGrid } from '../components/basic/collectionGrid/CollectionGrid'
import { CollectionSingleItem } from '../components/UI/collectionSingleItem/CollectionSingleItem'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { CollectionSingleItemPalette } from '../components/UI/collectionSingleItem/CollectionSingleItemPalette'
import { EnumLocation, updateLocation } from '../redux/slices/locationSlice'
import { removeColor } from '../redux/slices/palettesStoreSlice'

export const CollectionPalettes: FC = () => {
	const palettes = useAppSelector(state => state.collectionPalettes.collectionPalettes)

	const dispatch = useAppDispatch()

	const onClickTrash = (color: number) => {
		setTimeout(() => {
			dispatch(removeColor(color))
		}, 500)
	}

	useEffect(() => {
		dispatch(updateLocation(EnumLocation.collectionPalettes))
	}, [dispatch])

	return (
		<div className='collection'>
			<Sidebar />
			<CollectionGrid>
				{palettes.map(palette => (
					<CollectionSingleItem
						key={palette.id}
						collectionItem={palette}
						onClickTrash={onClickTrash}
					>
						<CollectionSingleItemPalette palette={palette} />
					</CollectionSingleItem>
				))}
			</CollectionGrid>
		</div>
	)
}
