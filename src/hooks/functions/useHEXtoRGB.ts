import { RGB } from '../../types/types'

export const HEXtoRGB = (hex: string): RGB | undefined => {
	if (!hex || hex === undefined || hex === '') {
		return undefined
	}

	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	hex = hex.replace(shorthandRegex, (m, r, g, b) => {
		return r + r + g + g + b + b
	})

	const result: RegExpExecArray | null =
		/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: undefined
}
