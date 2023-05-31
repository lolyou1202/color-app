import { FC } from 'react'
import './Sidebar.scss'
import { useAppSelector } from '../../../redux/hooks'
import { EnumLocation } from '../../../redux/slices/locationSlice'
import { SidebarButton } from '../../UI/sidebarButton/SidebarButton'

export const Sidebar: FC = () => {
	const location = useAppSelector(store => store.location)

	return (
		<div className='collection__sidebar'>
			<SidebarButton
				collectionLocation={location[EnumLocation.collectionColors]}
				text='Colors'
				animationDelay='0.0s'
			/>
			<SidebarButton
				collectionLocation={location[EnumLocation.collectionPalettes]}
				text='Palettes'
				animationDelay='0.2s'
			/>
		</div>
	)
}
