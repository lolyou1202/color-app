import { FC } from 'react'
import './MaskTemplateInColor.scss'
import { TemplateArrows } from '../templateArrows/TemplateArrows'
import { TemplateColorPicker } from '../templateColorPicker/TemplateColorPicker'
import { TemplateFuncButtons } from '../templateFuncButtons/TemplateFuncButtons'

interface IMaskTemplateInColor {
	positionInList: 'first' | 'between' | 'last'
	currentColor: string
	stroke: string
	isSaved: boolean
	isLock: boolean
	commonVisibility: boolean
	lockVisibility: boolean
	onClickArrow: (direction: 'left' | 'right') => void
	onChangeColor: (color: string) => void
	onBlurChange: () => void
	onClickRemove: () => void
	onClickSave: () => void
	onClickImport: () => void
	onClickCopy: () => void
	onClickLock: () => void
}

export const MaskTemplateInColor: FC<IMaskTemplateInColor> = ({
	positionInList,
	currentColor,
	stroke,
	isSaved,
	isLock,
	commonVisibility,
	lockVisibility,
	onClickArrow,
	onChangeColor,
	onBlurChange,
	onClickRemove,
	onClickSave,
	onClickImport,
	onClickCopy,
	onClickLock,
}) => {
	return (
		<div className='singleColor__mask'>
			<TemplateFuncButtons
				stroke={stroke}
				isSaved={isSaved}
				isLock={isLock}
				commonVisibility={commonVisibility}
				lockVisibility={lockVisibility}
				onClickRemove={onClickRemove}
				onClickSave={onClickSave}
				onClickImport={onClickImport}
				onClickCopy={onClickCopy}
				onClickLock={onClickLock}
			/>
			<TemplateColorPicker
				stroke={stroke}
				currentColor={currentColor}
				onChangeColor={onChangeColor}
				onBlurChange={onBlurChange}
			/>
			<TemplateArrows
				positionInList={positionInList}
				stroke={stroke}
				commonVisibility={commonVisibility}
				onClickArrow={onClickArrow}
			/>
		</div>
	)
}
