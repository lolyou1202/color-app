export const useAddNumbOfColors = <
	T extends React.Dispatch<React.SetStateAction<boolean>>
>(
	setShowPlus: T,
	setAnimationPlus: T,
	setShowNumbers: T,
	setAnimationNumbers: T
) => {
	let timeout1
	let timeout2
	clearTimeout(timeout1)
	clearTimeout(timeout2)
	return () => {
		setAnimationPlus(true)
		timeout1 = setTimeout(() => {
			setAnimationPlus(false)
			setShowPlus(false)
			setAnimationNumbers(true)
		}, 200)
		timeout2 = setTimeout(() => {
			setShowNumbers(true)
			setAnimationNumbers(false)
		}, 250)
	}
}
