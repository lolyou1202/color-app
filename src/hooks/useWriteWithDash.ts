export const useWriteWithDash = () => {
	let result = ''
	return (array: string[]) => {
		array.map((arrayItem, index) => {
			index !== 0 && (result += '-')
			result += arrayItem
			return arrayItem
		})
		return result
	}
}
