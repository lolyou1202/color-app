import { FC } from 'react'
import { ArrowLeft } from '../icons/ArrowLeft'
import { ArrowRight } from '../icons/ArrowRight'
import { TemplateSingleIconInPalette } from '../templateSingleIconInPalette/TemplateSingleIconInPalette'

interface ITemplateSingleArrow {
	direction: 'left' | 'right'
	stroke: string
	commonVisibility: boolean
	onClickArrow: (direction: 'left' | 'right') => void
}

export const TemplateSingleArrow: FC<ITemplateSingleArrow> = ({
	direction,
	stroke,
	commonVisibility,
	onClickArrow,
}) => {
	return (
		<TemplateSingleIconInPalette
			label={direction}
			onClick={() => onClickArrow(direction)}
			className={commonVisibility ? ' visible' : ''}
		>
			{direction === 'left' ? (
				<ArrowLeft stroke={stroke} strokeWidth={3} />
			) : direction === 'right' ? (
				<ArrowRight stroke={stroke} strokeWidth={3} />
			) : (
				''
			)}
		</TemplateSingleIconInPalette>
	)
}
