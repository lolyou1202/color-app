import { FC, useCallback } from 'react'
import './Header.scss'
import { useAppSelector } from '../../../redux/hooks'
import { HeaderTitle } from './HeaderTitle'
import { EnumLocation } from '../../../redux/slices/locationSlice'

export const Header: FC = () => {
	const location = useAppSelector(state => state.location)

	const activeCollectionPage = useCallback(() => {
		return location[EnumLocation.collectionPalettes].active
			? location[EnumLocation.collectionPalettes]
			: location[EnumLocation.collectionColors].active
			? location[EnumLocation.collectionColors]
			: location[EnumLocation.collection]
	}, [location])

	return (
		<div className='header'>
			<div className='header__list'>
				<HeaderTitle
					title='Picker'
					location={location[EnumLocation.picker]}
				/>
				<HeaderTitle
					title='Palette'
					location={location[EnumLocation.palette]}
				/>
				<HeaderTitle
					title='Collection'
					location={activeCollectionPage()}
				/>
			</div>
		</div>
	)
}
