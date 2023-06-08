import { cutString } from './useCutString'
import { validateCutString } from './useValidateString'

export function stringRGBtoObjectRGB(string: string) {
	const arrayCutString = cutString(string)
	
	if (!arrayCutString) {
		return null
	}

	return validateCutString(arrayCutString)
}
