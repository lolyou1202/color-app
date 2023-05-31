import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ICollectionPalettes {
	id: number
	hex: string[]
}

interface IInitialState {
	collectionPalettes: ICollectionPalettes[]
}

const initialState: IInitialState = {
	collectionPalettes: [
		{
			id: 1,
			hex: [
				'D9ED92',
				'B5E48C',
				'99D98C',
				'76C893',
				'52B69A',
				'168AAD',
				'1A759F',
				'1E6091',
				'184E77',
			],
		},
		{ id: 2, hex: ['168AAD', '1A759F', '1E6091', '184E77'] },
		{ id: 3, hex: ['C38E70', 'B07D62', '9D6B53', '8A5A44', '774936'] },
	],
}

const colorsStoreSlice = createSlice({
	name: 'colorsStore',
	initialState,
	reducers: {
		addColor: (state, action) => {},
		removeColor: (state, { payload }: PayloadAction<number>) => {
			state.collectionPalettes = state.collectionPalettes.filter(
				color => color.id !== payload
			)
		},
	},
})

const { actions, reducer } = colorsStoreSlice
export const { addColor, removeColor } = actions
export default reducer
