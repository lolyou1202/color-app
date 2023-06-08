export const useLeaveAdditiveArea = <
	T extends React.Dispatch<React.SetStateAction<boolean>>
>(
	setShowPlus: T,
	setShowNumbers: T
) => {
	let timeout
	clearTimeout(timeout)
	return () => {
		timeout = setTimeout(() => {
			setShowNumbers(false)
			setShowPlus(true)
		}, 250)
	}
}
