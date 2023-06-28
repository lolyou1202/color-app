import { FC } from 'react'
import { ILocation } from '../../../redux/slices/locationSlice'
import { Link } from 'react-router-dom'

interface IHeaderTitle {
	title: string
	location: ILocation
	path: string
}

export const HeaderTitle: FC<IHeaderTitle> = ({ title, location, path }) => {
	return (
		<Link to={`${path}`}>
			<button
				className={
					'header__list-item' + (location.active ? ' active' : '')
				}
				key={title}
			>
				<h1>{title}</h1>
			</button>
		</Link>
	)
}
