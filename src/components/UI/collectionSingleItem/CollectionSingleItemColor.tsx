import { FC } from 'react'
import { PrimaryButton } from '../primaryButton/PrimaryButton'
import { CollectionColorInColor } from '../collectionColorInContainer/CollectionColorInColor'

interface ICollectionSingleItemColor {
	color: string
}

export const CollectionSingleItemColor: FC<ICollectionSingleItemColor> = ({
	color,
}) => {
	return (
		<PrimaryButton
			className='colorContainer'
			display='flex'
			justifyContent='center'
			alignItems='center'
			position='relative'
			background={color}
			width='100%'
			height='144px'
			overflow='hidden'
		>
			<CollectionColorInColor color={color} />
		</PrimaryButton>
	)
}
