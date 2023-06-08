import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { EnumLocation, updateLocation } from '../redux/slices/locationSlice'
import { PaletteButtons } from '../components/UI/paletteButtons/PaletteButtons'
import { Dashboard } from '../components/basic/dashboard/Dashboard'

export const Palette: FC = () => {
	const { paletteId } = useParams()
	const urlPaletteArray = paletteId?.split('-')

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(updateLocation(EnumLocation.palette))
	}, [dispatch])

	return (
		<div className='palette'>
			<Dashboard />
			<PaletteButtons />
		</div>
	)
}
