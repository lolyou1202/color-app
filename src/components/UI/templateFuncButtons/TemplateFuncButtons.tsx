import { FC } from 'react'
import './TemplateFuncButtons.scss'
import { TemplateSingleIconInPalette } from '../templateSingleIconInPalette/TemplateSingleIconInPalette'
import { Cross } from '../icons/Cross'
import { Copy } from '../icons/Copy'
import { Import } from '../icons/Import'
import { Heart } from '../icons/Heart'
import { Lock } from '../icons/Lock'
import { Unlock } from '../icons/Unlock'

interface ITemplateFuncButtons {
	stroke: string
	isSaved: boolean
	isLock: boolean
	commonVisibility: boolean
	lockVisibility: boolean
	onClickRemove: () => void
	onClickSave: () => void
	onClickImport: () => void
	onClickCopy: () => void
	onClickLock: () => void
}

export const TemplateFuncButtons: FC<ITemplateFuncButtons> = ({
	stroke,
	isSaved,
	isLock,
	commonVisibility,
	lockVisibility,
	onClickRemove,
	onClickSave,
	onClickImport,
	onClickCopy,
	onClickLock,
}) => {
	return (
		<div className='singleColor__mask-funcButtons'>
			<TemplateSingleIconInPalette
				label='Remove color'
				onClick={() => onClickRemove()}
				className={commonVisibility ? ' visible' : ''}
			>
				<Cross stroke={stroke} strokeWidth={3} />
			</TemplateSingleIconInPalette>
			<TemplateSingleIconInPalette
				label='Save color'
				onClick={() => onClickSave()}
				className={commonVisibility ? ' visible' : ''}
			>
				<Heart
					stroke={stroke}
					strokeWidth={3}
					fill={isSaved ? stroke : 'none'}
				/>
			</TemplateSingleIconInPalette>
			<TemplateSingleIconInPalette
				label='Open in picker'
				onClick={() => onClickImport()}
				className={commonVisibility ? ' visible' : ''}
			>
				<Import stroke={stroke} strokeWidth={3} />
			</TemplateSingleIconInPalette>
			<TemplateSingleIconInPalette
				label='Copy HEX'
				onClick={() => onClickCopy()}
				className={commonVisibility ? ' visible' : ''}
			>
				<Copy stroke={stroke} strokeWidth={3} />
			</TemplateSingleIconInPalette>
			<TemplateSingleIconInPalette
				label={'Toggle lock'}
				onClick={() => onClickLock()}
				className={lockVisibility ? ' visible' : ''}
			>
				{isLock ? (
					<Lock stroke={stroke} strokeWidth={3} />
				) : (
					<Unlock stroke={stroke} strokeWidth={3} />
				)}
			</TemplateSingleIconInPalette>
		</div>
	)
}
