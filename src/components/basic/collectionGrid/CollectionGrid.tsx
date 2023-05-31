import { FC } from 'react'
import './CollectionsGrid.scss'

interface ICollectionGrid {
	children: React.ReactNode
}

export const CollectionGrid: FC<ICollectionGrid> = ({ children }) => {
	return (
		<div className='collection__grid-mask'>
			<ul className='collection__grid'>{children}</ul>
		</div>
	)
}
