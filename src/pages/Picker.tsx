import { FC, useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { EnumLocation, updateLocation } from '../redux/slices/locationSlice'
import { PickerInputItem } from '../components/UI/pickerInputItem/PickerInputItem'
import { Hash } from '../components/UI/icons/Hash'
import { Drop } from '../components/UI/icons/Drop'
import { HEXtoRGB } from '../hooks/functions/useHEXtoRGB'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchRandom, setColor } from '../redux/slices/colorSlice'
import { PickerButtons } from '../components/basic/pickerButtons/PickerButtons'
import { stringRGBtoObjectRGB } from '../hooks/functions/useStringRGBtoObjectRGB'
import { RGBtoHEX } from '../hooks/functions/useRGBtoHEX'
import { addColor } from '../redux/slices/colorsStoreSlice'
import { useToast } from '@chakra-ui/react'
import { Toast } from '../components/UI/toast/Toast'
import { isValidateHEX } from '../hooks/functions/isValidateHEX'

export const Picker: FC = () => {
	const pickerColor = useAppSelector(store => store.pickerColor)

	const { colorId } = useParams()

	const [HEXInputState, SetHEXInputState] = useState(colorId || '')
	const [RGBInputState, SetRGBInputState] = useState('')

	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const toast = useToast()

	const HEXToRGB = useCallback(
		(value: string) => {
			const validValue = value.replace(/[^\d\w]/g, '')
			SetHEXInputState(validValue)

			if (!validValue && validValue !== pickerColor.color) {
				dispatch(setColor(''))
				navigate('/picker')
				return
			}

			const RGB = HEXtoRGB(validValue)

			if (!RGB) return SetRGBInputState('')

			const { r, g, b } = RGB

			if (
				location.pathname !== `/picker/${validValue}` &&
				validValue !== pickerColor.color
			) {
				navigate(`/picker/${validValue}`)
			}
			if (validValue !== pickerColor.color) {
				dispatch(setColor(validValue))
			}

			SetRGBInputState(`${r}, ${g}, ${b}`)
		},
		[dispatch, location.pathname, navigate, pickerColor.color]
	)

	const RGBToHEX = useCallback(
		(value: string) => {
			const validValue = value.replace(/[^\d, ]/g, '')

			SetRGBInputState(validValue)

			if (!validValue) {
				dispatch(setColor(''))
				navigate('/picker')
				return
			}
			const RGB = stringRGBtoObjectRGB(validValue)

			if (!RGB) return SetHEXInputState('')

			const { r, g, b } = RGB

			const HEX = RGBtoHEX(r, g, b)

			if (location.pathname !== `/picker/${HEX}`) {
				navigate(`/picker/${HEX}`)
			}

			dispatch(setColor(HEX))

			SetHEXInputState(HEX)
		},
		[dispatch, location.pathname, navigate]
	)

	const onClickClear = () => {
		HEXToRGB('')
		RGBToHEX('')
	}
	const onClickSave = () => {
		dispatch(addColor(isValidateHEX(pickerColor.color)![0]))
		toast({
			render: () => (
				<Toast
					variant='regular'
					text={`Сolor #${pickerColor.color} added to the collection`}
				/>
			),
		})
	}
	const onClickRandom = () => {
		dispatch(fetchRandom())
	}

	useEffect(() => {
		dispatch(updateLocation(EnumLocation.picker))
	}, [dispatch])

	//useEffect(() => {
	//	dispatch(setColor(colorId || ''))
	//}, [colorId, dispatch])

	//useEffect(() => {
	//	HEXToRGB(pickerColor.color)
	//}, [HEXToRGB, pickerColor.color])

	useEffect(() => {
		dispatch(setColor(colorId || ''))
		HEXToRGB(colorId || '')
	}, [HEXToRGB, colorId, dispatch, pickerColor.color])

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
				HEXInputState={HEXInputState}
				onClickClear={onClickClear}
				onClickSave={onClickSave}
				onClickRandom={onClickRandom}
			/>
		</div>
	)
}
