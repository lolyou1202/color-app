import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ICollectionColors {
	id: number
	hex: string[]
}

interface IInitialState {
	collectionColors: ICollectionColors[]
}

const initialState: IInitialState = {
	collectionColors: [
		{ id: 1, hex: ['121212'] },
		{ id: 2, hex: ['184E77'] },
		{ id: 3, hex: ['AD8DDD'] },
		{ id: 4, hex: ['52B69A'] },
		{ id: 5, hex: ['76C893'] },
		{ id: 6, hex: ['B5E48C'] },
		{ id: 7, hex: ['168AAD'] },
		{ id: 8, hex: ['EDC4B3'] },
		{ id: 9, hex: ['E6B8A2'] },
		{ id: 10, hex: ['DEAB90'] },
		{ id: 11, hex: ['D69F7E'] },
		{ id: 12, hex: ['CD9777'] },
		{ id: 13, hex: ['C38E70'] },
		{ id: 14, hex: ['B07D62'] },
		{ id: 15, hex: ['9D6B53'] },
		{ id: 16, hex: ['8A5A44'] },
		{ id: 17, hex: ['774936'] },
	],
}

const colorsStoreSlice = createSlice({
	name: 'colorsStore',
	initialState,
	reducers: {
		addColor: (state, action) => {},
		removeColor: (state, { payload }: PayloadAction<number>) => {
			state.collectionColors = state.collectionColors.filter(
				color => color.id !== payload
			)
		},
	},
})

const { actions, reducer } = colorsStoreSlice
export const { addColor, removeColor } = actions
export default reducer
