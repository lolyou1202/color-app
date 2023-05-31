import { FC, useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { EnumLocation, updateLocation } from '../redux/slices/locationSlice'
import { PickerInputItem } from '../components/UI/pickerInputItem/PickerInputItem'
import { Hash } from '../components/UI/icons/Hash'
import { Drop } from '../components/UI/icons/Drop'
import { HEXtoRGB } from '../hooks/functions/useHEXtoRGB'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchRandom, setColor } from '../redux/slices/pickerColorSlice'
import { PickerButtons } from '../components/basic/pickerButtons/PickerButtons'

export const Picker: FC = () => {
	const pickerColor = useAppSelector(store => store.pickerColor)

	const { colorId } = useParams()

	const [HEXInputState, SetHEXInputState] = useState(colorId || '')
	const [RGBInputState, SetRGBInputState] = useState('')

	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const HEXToRGB = useCallback((value: string) => {


		if (!HEXInputState) {
			dispatch(setColor(''))
			navigate('/picker')
			return
		}

		const RGB = HEXtoRGB(HEXInputState)

		if (!RGB) return SetRGBInputState('')
		if (location.pathname !== `/picker/${HEXInputState}`) {
			navigate(`/picker/${HEXInputState}`)
		}

		dispatch(setColor(HEXInputState))
		SetRGBInputState(`${RGB.r}, ${RGB.g}, ${RGB.b}`)
	}, [HEXInputState, dispatch, location.pathname, navigate])

	const RGBToHEX = useCallback(() => {}, [])

	const onClickClear = () => {}
	const onClickSave = () => {}
	const onClickRandom = () => {
		dispatch(fetchRandom())
	}

	useEffect(() => {
		dispatch(updateLocation(EnumLocation.picker))
	}, [dispatch])

	useEffect(() => {
		dispatch(setColor(colorId || ''))
		HEXToRGB(colorId || '')
	}, [HEXToRGB, colorId, dispatch])

	return (
		<div className='picker'>
			<PickerInputItem
				text={HEXInputState}
				onChange={HEXToRGB}
				mainColor={pickerColor.color}
				contrastColor={pickerColor.contrastColor}
				placeholder='HEX'
				animationDelay='0.0s'
			>
				<Hash
					className='picker__inputItem-ico'
					stroke={pickerColor.contrastColor}
					strokeWidth={3}
					size={40}
				/>
			</PickerInputItem>
			<PickerInputItem
				text={RGBInputState}
				onChange={RGBToHEX}
				mainColor={pickerColor.color}
				contrastColor={pickerColor.contrastColor}
				placeholder='RGB'
				animationDelay='0.2s'
			>
				<Drop
					className='picker__inputItem-ico'
					stroke={pickerColor.contrastColor}
					strokeWidth={3}
					size={40}
				/>
			</PickerInputItem>
			<PickerButtons
				disabledButtons={true}
				onClickClear={onClickClear}
				onClickSave={onClickSave}
				onClickRandom={onClickRandom}
			/>
		</div>
	)
}
