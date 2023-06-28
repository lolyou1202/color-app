import { Ipalette } from '../redux/slices/paletteSlice'

export const useGeneratePaletteTemplate = () => {
	return (palette: Ipalette[]): string[] =>
		palette.length === 0
			? ['-', '-', '-', '-', '-']
			: palette.map(color => {
					if (color.lock) {
						return `#${color.HEX}`
					} else {
						return '-'
					}
			  })
}
