import { FC, useEffect, useState } from 'react'
import './SingleColorInPalette.scss'
import {
	Ipalette,
	onChangeColor,
	onChangeSave,
	onChangeUnsave,
	onLock,
	onRemove,
	onSave,
	swapColors,
} from '../../../redux/slices/paletteSlice'
import { AddColors } from '../../UI/addColors/AddColors'
import { MaskTemplateInColor } from '../../UI/maskTemplateInColor/MaskTemplateInColor'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { getContrast } from '../../../hooks/functions/getContrast'
import { addColor, removeColor } from '../../../redux/slices/colorsStoreSlice'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { Toast } from '../../UI/toast/Toast'

interface ISingleColorInPalette {
	positionIndex: number
	singleColor: Ipalette
	positionInList: 'first' | 'between' | 'last'
	paletteLength: number
	onClickNumberOfAdding: (index: number, number: number) => void
}

export const SingleColorInPalette: FC<ISingleColorInPalette> = ({
	positionIndex,
	singleColor,
	positionInList,
	paletteLength,
	onClickNumberOfAdding,
}) => {
	const [currentColor, setCurrentColor] = useState(`#${singleColor.HEX}`)
	const [commonVisibility, setCommonVisibility] = useState(false)
	const [lockVisibility, setLockVisibility] = useState(false)

	const { collectionColors } = useAppSelector(store => store.collectionColors)

	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const toast = useToast()

	const onClickArrow = (direction: 'left' | 'right') => {
		switch (direction) {
			case 'left':
				dispatch(
					swapColors({
						currentPosition: positionIndex,
						subsequent: positionIndex - 1,
					})
				)
				break
			case 'right':
				dispatch(
					swapColors({
						currentPosition: positionIndex,
						subsequent: positionIndex + 1,
					})
				)
				break
		}
	}

	const onBlurChange = () => {
		dispatch(
			onChangeColor({
				position: positionIndex,
				HEX: currentColor.replace(/[^\d\w]/g, '').toUpperCase(),
			})
		)
	}

	const onClickRemove = () => {
		dispatch(onRemove({ positionIndex }))
	}

	const onClickSave = () => {
		dispatch(onSave({ positionIndex }))
		if (singleColor.saved) {
			const removedColor = collectionColors.find(
				color => color.hex[0] === singleColor.HEX
			)!
			dispatch(removeColor(removedColor.id))
		} else {
			dispatch(addColor(singleColor.HEX))
		}
	}

	const onClickImport = () => {
		navigate(`/picker/${singleColor.HEX}`)
	}

	const onClickCopy = () => {
		navigator.clipboard.writeText(singleColor.HEX)
		toast({
			render: () => (
				<Toast
					variant='regular'
					text={`Сolor ${singleColor.HEX} copied to the clipboard`}
				/>
			),
		})
	}

	const onClickLock = () => {
		dispatch(onLock({ positionIndex }))
	}

	useEffect(() => {
		const colorInCollection = collectionColors.find(
			color => color.hex[0] === singleColor.HEX
		)
		if (colorInCollection) {
			!singleColor.saved && dispatch(onChangeSave({ positionIndex }))
		} else {
			singleColor.saved && dispatch(onChangeUnsave({ positionIndex }))
		}
		colorInCollection && dispatch(onChangeSave({ positionIndex }))
	}, [collectionColors, dispatch, positionIndex, singleColor])

	return (
		<div
			className='singleColor'
			style={{
				background: currentColor,
				width: 101 / paletteLength + '%',
				left: (100 * positionIndex) / paletteLength + '%',
			}}
			onMouseEnter={() => {
				if (singleColor.lock) {
					setCommonVisibility(true)
				} else {
					setCommonVisibility(true)
					setLockVisibility(true)
				}
			}}
			onMouseLeave={() => {
				if (singleColor.lock) {
					setCommonVisibility(false)
				} else {
					setCommonVisibility(false)
					setLockVisibility(false)
				}
			}}
		>
			<MaskTemplateInColor
				positionInList={positionInList}
				currentColor={currentColor}
				commonVisibility={commonVisibility}
				lockVisibility={lockVisibility}
				stroke={getContrast(currentColor)}
				isSaved={singleColor.saved}
				isLock={singleColor.lock}
				onClickArrow={onClickArrow}
				onChangeColor={setCurrentColor}
				onBlurChange={onBlurChange}
				onClickRemove={onClickRemove}
				onClickSave={onClickSave}
				onClickImport={onClickImport}
				onClickCopy={onClickCopy}
				onClickLock={onClickLock}
			/>
			{positionInList !== 'first' && (
				<AddColors
					positionIndex={positionIndex}
					paletteLength={paletteLength}
					onClickNumberOfAdding={onClickNumberOfAdding}
				/>
			)}
		</div>
	)
}
