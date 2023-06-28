import { FC, useCallback } from 'react'
import './Header.scss'
import { useAppSelector } from '../../../redux/hooks'
import { HeaderTitle } from './HeaderTitle'
import { EnumLocation } from '../../../redux/slices/locationSlice'
import { useWriteWithDash } from '../../../hooks/useWriteWithDash'

export const Header: FC = () => {
	const location = useAppSelector(state => state.location)
	const { palette } = useAppSelector(state => state.pickerPalette)
	const { color } = useAppSelector(state => state.pickerColor)

	const writeWithDash = useWriteWithDash()

	const activeCollectionPage = useCallback(() => {
		return location[EnumLocation.collectionPalettes].active
			? location[EnumLocation.collectionPalettes]
			: location[EnumLocation.collectionColors].active
			? location[EnumLocation.collectionColors]
			: location[EnumLocation.collection]
	}, [location])

	const pathWithHeaderPalette = useCallback(() => {
		return (
			location[EnumLocation.palette].path +
			(palette.map(color => color.HEX).length > 0
				? `/${writeWithDash(palette.map(color => color.HEX))}`
				: '')
		)
	}, [location, palette, writeWithDash])

	const pathWithHeaderPicker = useCallback(() => {
		return location[EnumLocation.picker].path + (color ? `/${color}` : '')
	}, [color, location])

	return (
		<div className='header'>
			<div className='header__list'>
				<HeaderTitle
					title='Picker'
					location={location[EnumLocation.picker]}
					path={pathWithHeaderPicker()}
				/>
				<HeaderTitle
					title='Palette'
					location={location[EnumLocation.palette]}
					path={pathWithHeaderPalette()}
				/>
				<HeaderTitle
					title='Collection'
					location={activeCollectionPage()}
					path={activeCollectionPage().path}
				/>
			</div>
		</div>
	)
}
