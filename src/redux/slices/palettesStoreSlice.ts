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
		{ id: 4, hex: ['E63946', 'F1FAEE', 'A8DADC', '457B9D', '1D3557'] },
		{ id: 5, hex: ['DAD7CD', 'A3B18A', '588157', '3A5A40', '344E41'] },
		{
			id: 6,
			hex: [
				'10002B',
				'240046',
				'3C096C',
				'5A189A',
				'7B2CBF',
				'9D4EDD',
				'C77DFF',
				'E0AAFF',
			],
		},
	],
}

const palettesStoreSlice = createSlice({
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

const { actions, reducer } = palettesStoreSlice
export const { addColor, removeColor } = actions
export default reducer
