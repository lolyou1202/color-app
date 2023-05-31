import { RGB } from '../../types/types'
import { HEXtoRGB } from './useHEXtoRGB'
import { RGBtoYIQ } from './useRGBtoYIQ'

export const getContrast = (
	colorHex: string | undefined,
	threshold: number = 128
): string => {
	if (colorHex === undefined) {
		return '#353535'
	}

	const rgb: RGB | undefined = HEXtoRGB(colorHex)

	if (rgb === undefined) {
		return '#353535'
	}

	return RGBtoYIQ(rgb) >= threshold ? '#353535' : '#fff'
}
