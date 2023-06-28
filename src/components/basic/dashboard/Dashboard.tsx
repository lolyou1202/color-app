import { FC, useCallback, useEffect, useState } from 'react'
import './Dashboard.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { SingleColorInPalette } from '../singleColorInPalette/SingleColorInPalette'
import { fillPalette } from '../../../redux/slices/paletteSlice'
import { useNavigate, useParams } from 'react-router-dom'

interface IDashboard {
	onClickNumberOfAdding: (index: number, number: number) => void
	animationDelay?: string
}

export const Dashboard: FC<IDashboard> = ({ onClickNumberOfAdding, animationDelay }) => {
	const [animation, setAnimation] = useState(true)

	const { paletteId } = useParams()

	const { palette } = useAppSelector(store => store.pickerPalette)

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const getPositionInList = useCallback(
		(index: number) => {
			switch (true) {
				case index === 0:
					return 'first'
				case palette.length - 1 !== index && index !== 0:
					return 'between'
				case palette.length - 1 === index:
					return 'last'
				default:
					return 'last'
			}
		},
		[palette.length]
	)

	useEffect(() => {
		navigate(`/palette/${palette.map(color => color.HEX).join('-')}`)
	}, [dispatch, navigate, palette])

	useEffect(() => {
		dispatch(fillPalette(paletteId?.split('-') || []))
	}, [dispatch, paletteId])

	useEffect(() => {
		setTimeout(() => {
			setAnimation(false)
		}, 400)
	}, [])

	return (
		<div
			className={
				'dashboard primaryButton' + (animation ? ' animation' : '')
			}
			style={{
				animationDelay: animationDelay,
			}}
		>
			{palette.map((singleColor, index) => (
				<SingleColorInPalette
					key={singleColor.id}
					positionIndex={index}
					singleColor={singleColor}
					positionInList={getPositionInList(index)}
					paletteLength={palette.length}
					onClickNumberOfAdding={onClickNumberOfAdding}
				/>
			))}
		</div>
	)
}
