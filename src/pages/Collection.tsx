import { FC, useEffect } from 'react'
import { Sidebar } from '../components/basic/sidebar/Sidebar'
import { useAppDispatch } from '../redux/hooks'
import { EnumLocation, updateLocation } from '../redux/slices/locationSlice'

export const Collection: FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(updateLocation(EnumLocation.collection))
	}, [dispatch])
	
	return (
		<div className='collection'>
			<Sidebar />
		</div>
	)
}
