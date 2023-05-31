import { FC } from 'react'
import { PrimaryButton } from '../primaryButton/PrimaryButton'
import { Trash } from '../icons/Trash'
import { Link } from 'react-router-dom'
import { EnumLocation } from '../../../redux/slices/locationSlice'
import { useAppSelector } from '../../../redux/hooks'
import { useCurrentLocation } from '../../../hooks/useCurrentLocation'
import { useWriteWithDash } from '../../../hooks/useWriteWithDash'
import { useToast } from '@chakra-ui/react'
import { Toast } from '../toast/Toast'

interface IOptionButton {
	collectionItem: { id: number; hex: string[] }
	onClickTrash: (collectionItem: number) => void
	setAnimationDelete: React.Dispatch<React.SetStateAction<boolean>>
}

export const OptionButtons: FC<IOptionButton> = ({
	collectionItem,
	onClickTrash,
	setAnimationDelete,
}) => {
	const location = useAppSelector(store => store.location)
	const currentLocation = useCurrentLocation()
	const writeWithDash = useWriteWithDash()
	const toast = useToast()

	return (
		<div className='collection__grid-optionButtons'>
			<Link
				to={
					currentLocation(location)?.text ===
					EnumLocation.collectionColors
						? `/${EnumLocation.picker}/${writeWithDash(
								collectionItem.hex
						  )}`
						: `/${EnumLocation.palette}/${writeWithDash(
								collectionItem.hex
						  )}`
				}
			>
				<PrimaryButton
					display='flex'
					justifyContent='center'
					boxShadow='var(--shadow-short)'
					padding='6px 0 10px'
					width='100px'
					height='46px'
				>
					<p>Open</p>
				</PrimaryButton>
			</Link>
			<PrimaryButton
				display='flex'
				justifyContent='center'
				alignItems='center'
				boxShadow='var(--shadow-short)'
				width='46px'
				height='46px'
				onclick={() => {
					onClickTrash(collectionItem.id)
					setAnimationDelete(true)
					toast({
						render: () => (
							<Toast
								variant='regular'
								text={
									currentLocation(location)?.text ===
									EnumLocation.collectionColors
										? `Color #${collectionItem.hex[0]} removed from collection`
										: 'Palette removed from collection'
								}
							/>
						),
					})
				}}
			>
				<Trash size={28} stroke='#353535' strokeWidth={3} />
			</PrimaryButton>
		</div>
	)
}
