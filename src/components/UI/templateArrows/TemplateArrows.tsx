import { FC, useCallback } from 'react'
import './TemplateArrows.scss'
import { TemplateSingleArrow } from './TemplateSingleArrow'

interface ITemplateArrows {
	positionInList: 'first' | 'between' | 'last'
	stroke: string
	commonVisibility: boolean
	onClickArrow: (direction: 'left' | 'right') => void
}

export const TemplateArrows: FC<ITemplateArrows> = ({
	positionInList,
	stroke,
	commonVisibility,
	onClickArrow,
}) => {
	const templateArrows = useCallback(() => {
		switch (positionInList) {
			case 'first':
				return (
					<TemplateSingleArrow
						direction='right'
						stroke={stroke}
						commonVisibility={commonVisibility}
						onClickArrow={onClickArrow}
					/>
				)
			case 'between':
				return (
					<>
						<TemplateSingleArrow
							direction='left'
							stroke={stroke}
							commonVisibility={commonVisibility}
							onClickArrow={onClickArrow}
						/>
						<TemplateSingleArrow
							direction='right'
							stroke={stroke}
							commonVisibility={commonVisibility}
							onClickArrow={onClickArrow}
						/>
					</>
				)
			case 'last':
				return (
					<TemplateSingleArrow
						direction='left'
						stroke={stroke}
						commonVisibility={commonVisibility}
						onClickArrow={onClickArrow}
					/>
				)
		}
	}, [positionInList, stroke, commonVisibility, onClickArrow])

	return <div className='singleColor__mask-arrows'>{templateArrows()}</div>
}
