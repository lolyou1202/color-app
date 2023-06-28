import { FC, useState } from 'react'
import './AddColors.scss'
import { Plus } from '../icons/Plus'
import { useAddNumbOfColors } from '../../../hooks/useAddNumbOfColors'
import { useLeaveAdditiveArea } from '../../../hooks/useLeaveAdditiveArea'

interface IAddColors {
	paletteLength: number
	positionIndex: number
	onClickNumberOfAdding: (index: number, number: number) => void
}

export const AddColors: FC<IAddColors> = ({
	paletteLength,
	positionIndex,
	onClickNumberOfAdding,
}) => {
	const [showPlus, setShowPlus] = useState(true)
	const [showNumbers, setShowNumbers] = useState(false)
	const [animationPlus, setAnimationPlus] = useState(false)
	const [animationNumbers, setAnimationNumbers] = useState(false)

	const animateClick = useAddNumbOfColors(
		setShowPlus,
		setAnimationPlus,
		setShowNumbers,
		setAnimationNumbers
	)
	const animateLeave = useLeaveAdditiveArea(setShowPlus, setShowNumbers)

	return (
		<div
			className='addColors__backdrop'
			onMouseLeave={() => animateLeave()}
		>
			{10 - paletteLength > 0 && (
				<div className='addColors primaryButton'>
					<button
						className={
							'addColors-ico' +
							(showPlus ? '' : ' hide') +
							(animationPlus ? ' animationHide' : '')
						}
						onClick={() => animateClick()}
					>
						<Plus
							size={30}
							stroke='var(--primary-dark)'
							strokeWidth={3}
						/>
					</button>
					<div
						className={
							'addColors__listNumbers' +
							(showNumbers ? '' : ' hide') +
							(animationNumbers ? ' animationHide' : '')
						}
					>
						{[...Array(10 - paletteLength).keys()].map(item => (
							<button
								key={item}
								className='addColors__listNumbers-singleNumber'
								onClick={() =>
									onClickNumberOfAdding(
										positionIndex - 1,
										item + 1
									)
								}
							>
								<p>{item + 1}</p>
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
