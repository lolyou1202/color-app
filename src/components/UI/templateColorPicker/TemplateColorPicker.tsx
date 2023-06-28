import { FC } from 'react'
import './TemplateColorPicker.scss'
import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import { HexColorPicker } from 'react-colorful'
import { AppTooltip } from '../tooltip/AppTooltip'

interface ITemplateColorPicker {
	currentColor: string
	stroke: string
	onChangeColor: (color: string) => void
	onBlurChange: () => void
}

export const TemplateColorPicker: FC<ITemplateColorPicker> = ({
	stroke,
	currentColor,
	onChangeColor,
	onBlurChange,
}) => {
	return (
		<AppTooltip
			label='Select color'
			fontSize={20}
			padding='4px 16px 6px'
			marginBottom={0}
			borderRadius={8}
		>
			<div className='singleColor__mask-colorPicker'>
				<Popover>
					<PopoverTrigger>
						<p
							className='singleColor__mask-singleColorPicker'
							style={{ color: stroke }}
						>
							{currentColor
								.replace(/[^\d\w]/g, '')
								.toLocaleUpperCase()}
						</p>
					</PopoverTrigger>
					<PopoverContent
						style={{
							background: 'transparent',
							border: 'none',
							outline: 'none',
							outlineOffset: 0,
							boxShadow: 'none',
							width: '100%',
						}}
					>
						<HexColorPicker
							color={currentColor}
							onChange={onChangeColor}
							onBlur={() => onBlurChange()}
							onClick={e => {
								console.log(123)
								e.stopPropagation()
							}}
						/>
					</PopoverContent>
				</Popover>
			</div>
		</AppTooltip>
	)
}
