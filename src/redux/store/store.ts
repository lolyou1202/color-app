import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import location from '../slices/locationSlice'
import collectionColors from '../slices/colorsStoreSlice'
import collectionPalettes from '../slices/palettesStoreSlice'
import pickerColor from '../slices/pickerColorSlice'

export const store = configureStore({
	reducer: {
		location,
		collectionColors,
		collectionPalettes,
		pickerColor
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
