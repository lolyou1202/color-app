import { FC, useState } from 'react'
import { Check } from '../icons/Check'
import { useToast } from '@chakra-ui/react'
import { Toast } from '../toast/Toast'
import { getContrast } from '../../../hooks/functions/getContrast'

interface ICollectionColorInColor {
	color: string
}

export const CollectionColorInColor: FC<ICollectionColorInColor> = ({
	color,
}) => {
	const [checkAnimation, setCheckAnimation] = useState(false)
	const [hoverColor, setHoverColor] = useState(false)

	const toast = useToast()

	const onClickColor = (color: string) => {
		if (checkAnimation) return
		navigator.clipboard.writeText(color)
		setCheckAnimation(true)
		toast({
			render: () => (
				<Toast
					variant='regular'
					text={`Сolor #${color} copied to the clipboard`}
				/>
			),
		})
	}

	return (
		<div
			className={'collectionColor__item'}
			style={{ background: `#${color}` }}
			onClick={() => onClickColor(color)}
			onMouseEnter={() => setHoverColor(true)}
			onMouseLeave={() => {
				setHoverColor(false)
				setCheckAnimation(false)
			}}
		>
			<h2
				className={
					'collectionColor__item-text' +
					(hoverColor && checkAnimation
						? ''
						: hoverColor
						? ' animation'
						: '')
				}
				style={{ color: getContrast(color) }}
			>
				{color}
			</h2>
			<Check
				className={
					'collectionColor__item-icon' +
					(checkAnimation && hoverColor ? ' animation' : '')
				}
				size={48}
				stroke={getContrast(color)}
				strokeWidth={3}
			/>
		</div>
	)
}
