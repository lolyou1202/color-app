import { FC } from 'react'
import { ILocation } from '../../../redux/slices/locationSlice'
import { Link } from 'react-router-dom'

interface IHeaderTitle {
	title: string
	location: ILocation
}

export const HeaderTitle: FC<IHeaderTitle> = ({ title, location }) => {
	return (
		<Link to={`${location.path}`}>
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
