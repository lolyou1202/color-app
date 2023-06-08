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
		addColorsBetweenColors(state, { payload }: PayloadAction<fetchArgs>) {
			const arrayAddedColors = chroma
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

			state.palette.splice(payload.index + 1, 0, ...arrayAddedColors)
		},
		fillPalette(state, { payload }: PayloadAction<string[]>) {
			const updateState = []
			asd: for (let i = 0; i < payload.length; i++) {
				for (let j = 0; j < state.palette.length; j++) {
					if (payload[i] === state.palette[j].HEX) {
						updateState.push(state.palette[j])
						continue asd
					}
				}
				updateState.push({
					id: getRandomInt(100, 10000),
					HEX: payload[i],
					contrastHEX: getContrast(payload[i]).toUpperCase(),
					lock: false,
					saved: false,
				})
			}
			state.palette = updateState
		},
	},
	extraReducers: builder => {},
})

const { actions, reducer } = paletteSlice
export const { addColorsBetweenColors, fillPalette } = actions
export default reducer

//const array1 = ['00B4D8', '1A759F', 'CAF0F8', '184E77']
//const array2 = [
//	{
//		id: 1,
//		HEX: '03045E',
//		contrastHEX: 'FFFFFF',
//		lock: false,
//		saved: false,
//	},
//	{
//		id: 2,
//		HEX: '0077B6',
//		contrastHEX: 'FFFFFF',
//		lock: false,
//		saved: false,
//	},
//	{
//		id: 3,
//		HEX: '00B4D8',
//		contrastHEX: 'FFFFFF',
//		lock: false,
//		saved: false,
//	},
//	{
//		id: 4,
//		HEX: '90E0EF',
//		contrastHEX: '353535',
//		lock: false,
//		saved: false,
//	},
//	{
//		id: 5,
//		HEX: 'CAF0F8',
//		contrastHEX: '353535',
//		lock: false,
//		saved: false,
//	},
//]

//const func = (array1: string[], array2: Ipalette[]): Ipalette[] => {
//	const updateState = []

//	asd: for (let i = 0; i < array1.length; i++) {
//		for (let j = 0; j < array2.length; j++) {
//			if (array1[i] === array2[j].HEX) {
//				updateState.push(array2[j])
//				continue asd
//			}
//		}
//		updateState.push({
//			id: getRandomInt(100, 10000),
//			HEX: array1[i],
//			contrastHEX: getContrast(array1[i]).toUpperCase(),
//			lock: false,
//			saved: false,
//		})
//	}

//	return updateState
//}

//console.log(func(array1, array2))
