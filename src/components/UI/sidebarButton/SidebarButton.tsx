import { FC } from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../primaryButton/PrimaryButton'
import {
	EnumLocation,
	ILocation,
	toggleLocation,
} from '../../../redux/slices/locationSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

interface ISidebarButton {
	collectionLocation: ILocation
	text: string
	animationDelay?: string
}

export const SidebarButton: FC<ISidebarButton> = ({
	text,
	collectionLocation,
	animationDelay,
}) => {
	const collectionPage = useAppSelector(
		store => store.location[EnumLocation.collection]
	)
	const dispatch = useAppDispatch()

	return (
		<Link
			to={
				collectionLocation.active
					? collectionPage.path
					: collectionLocation.path
			}
			onClick={() => dispatch(toggleLocation(collectionLocation.text))}
			className='collection__sidebar-link'
			style={{
				animationDelay: animationDelay,
			}}
		>
			<PrimaryButton
				variant={collectionLocation.active ? 'filled' : 'transparent'}
				display='flex'
				justifyContent='center'
				padding='14px 0 18px'
				width='200px'
				height='80px'
			>
				<p>{text}</p>
			</PrimaryButton>
		</Link>
	)
}
