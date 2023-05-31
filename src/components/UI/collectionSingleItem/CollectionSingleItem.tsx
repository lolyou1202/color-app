import { FC, ReactNode, useState } from 'react'
import './CollectionSingleItem.scss'
import { OptionButtons } from './OptionButtons'

interface ISingleColor {
	collectionItem: { id: number; hex: string[] }
	onClickTrash: (collectionItem: number) => void
	children?: ReactNode
}

export const CollectionSingleItem: FC<ISingleColor> = ({
	collectionItem,
	onClickTrash,
	children,
}) => {
	const [animationDelete, setAnimationDelete] = useState(false)
	return (
		<li
			className={
				'collection__grid-item' + (animationDelete ? ' delete' : '')
			}
		>
			{children}
			<OptionButtons
				collectionItem={collectionItem}
				onClickTrash={onClickTrash}
				setAnimationDelete={setAnimationDelete}
			/>
		</li>
	)
}
