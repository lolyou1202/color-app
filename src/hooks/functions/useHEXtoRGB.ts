import { RGB } from '../../types/types'
import { isValidateHEX } from './isValidateHEX'

export const HEXtoRGB = (HEX: string): RGB | undefined => {
	if (!HEX) {
		return undefined
	}

	const result = isValidateHEX(HEX)

	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: undefined
}
