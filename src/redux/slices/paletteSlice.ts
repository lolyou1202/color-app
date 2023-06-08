import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getContrast } from '../../hooks/functions/getContrast'
import chroma from 'chroma-js'
import { getRandomInt } from '../../hooks/functions/getRandomInt'

export interface Ipalette {
	id: number
	HEX: string
	contrastHEX: string
	lock: boolean
	saved: boolean
}

interface IinitialState {
	palette: Ipalette[]
}

const initialState: IinitialState = {
	palette: [
		{
			id: 1,
			HEX: '03045E',
			contrastHEX: 'FFFFFF',
			lock: false,
			saved: false,
		},
		{
			id: 2,
			HEX: '0077B6',
			contrastHEX: 'FFFFFF',
			lock: false,
			saved: false,
		},
		{
			id: 3,
			HEX: '00B4D8',
			contrastHEX: 'FFFFFF',
			lock: false,
			saved: false,
		},
		{
			id: 4,
			HEX: '90E0EF',
			contrastHEX: '353535',
			lock: false,
			saved: false,
		},
		{
			id: 5,
			HEX: 'CAF0F8',
			contrastHEX: '353535',
			lock: false,
			saved: false,
		},
	],
}

interface fetchArgs {
	index: number
	number: number
	firstColor: string
	lastColor: string
}

const paletteSlice = createSlice({
	name: 'openedPalette',
	initialState,
	reducers: {
		asd(state, { payload }: PayloadAction<fetchArgs>) {
			console.log(payload);
			const asd = chroma
				.scale([`#${payload.firstColor}`, `#${payload.lastColor}`])
				.colors(payload.number + 2)
				.slice(1, -1)
				.map(color => {
					const validateColor = color
						.replace(/[^a-zA-Z0-9]/g, '')
						.toUpperCase()
					return {
						id: getRandomInt(100, 10000),
						HEX: validateColor,
						contrastHEX: getContrast(validateColor),
						lock: false,
						saved: false,
					}
				})

			console.log(asd)

			state.palette.splice(payload.index + 1, 0, ...asd)
		},
	},
	extraReducers: builder => {},
})

const { actions, reducer } = paletteSlice
export const { asd } = actions
export default reducer
