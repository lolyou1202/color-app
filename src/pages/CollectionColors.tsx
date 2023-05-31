import { FC, useEffect } from 'react'
import { Sidebar } from '../components/basic/sidebar/Sidebar'
import { CollectionGrid } from '../components/basic/collectionGrid/CollectionGrid'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { CollectionSingleItem } from '../components/UI/collectionSingleItem/CollectionSingleItem'
import { removeColor } from '../redux/slices/colorsStoreSlice'
import { CollectionSingleItemColor } from '../components/UI/collectionSingleItem/CollectionSingleItemColor'
import {
	EnumLocation,
	updateLocation,
} from '../redux/slices/locationSlice'

export const CollectionColors: FC = () => {
	const colors = useAppSelector(
		state => state.collectionColors.collectionColors
	)

	const dispatch = useAppDispatch()

	const onClickTrash = (idItem: number) => {
		setTimeout(() => {
			dispatch(removeColor(idItem))
		}, 500)
	}

	useEffect(() => {
		dispatch(updateLocation(EnumLocation.collectionColors))
	}, [dispatch])

	return (
		<div className='collection'>
			<Sidebar />
			<CollectionGrid>
				{colors.map(color => (
					<CollectionSingleItem
						key={color.id}
						collectionItem={color}
						onClickTrash={onClickTrash}
					>
						<CollectionSingleItemColor color={color.hex[0]} />
					</CollectionSingleItem>
				))}
			</CollectionGrid>
		</div>
	)
}