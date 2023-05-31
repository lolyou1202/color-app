import { FC, useState } from 'react'
import { Check } from '../icons/Check'
import { useToast } from '@chakra-ui/react'
import { Toast } from '../toast/Toast'
import { getContrast } from '../../../hooks/functions/getContrast'

interface ICollectionColorInPalette {
	colorInPalette: string
}

export const CollectionColorInPalette: FC<ICollectionColorInPalette> = ({
	colorInPalette,
}) => {
	const [checkAnimation, setCheckAnimation] = useState(false)
	const [hoverColor, setHoverColor] = useState(false)

	const toast = useToast()

	const onClickColor = (color: string) => {
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
			className={
				'collectionPalette__item' + (hoverColor ? ' animation' : '')
			}
			style={{ background: `#${colorInPalette}` }}
			onClick={() => onClickColor(colorInPalette)}
			onMouseEnter={() => setHoverColor(true)}
			onMouseLeave={() => {
				setHoverColor(false)
				setCheckAnimation(false)
			}}
		>
			<h2
				className={
					'collectionPalette__item-text' +
					(hoverColor && checkAnimation
						? ''
						: hoverColor
						? ' animation'
						: '')
				}
				style={{ color: getContrast(colorInPalette) }}
			>
				{colorInPalette}
			</h2>
			<Check
				className={
					'collectionPalette__item-icon' +
					(checkAnimation && hoverColor ? ' animation' : '')
				}
				size={48}
				stroke={getContrast(colorInPalette)}
				strokeWidth={3}
			/>
		</div>
	)
}
