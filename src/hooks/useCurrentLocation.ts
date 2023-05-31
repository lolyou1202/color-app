import { IInitialState } from '../redux/slices/locationSlice'

export const useCurrentLocation = () => {
	return (location: IInitialState) => {
		let key: keyof IInitialState
		for (key in location) {
			if (location[key].active) {
				return location[key]
			}
		}
	}
}
