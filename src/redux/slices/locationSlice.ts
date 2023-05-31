import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum EnumLocation {
	picker = 'picker',
	palette = 'palette',
	collection = 'collection',
	collectionColors = 'collectionColors',
	collectionPalettes = 'collectionPalettes',
}
export interface ILocation {
	text: EnumLocation
	path: string
	active: boolean
}

export interface IInitialState {
	[EnumLocation.picker]: ILocation
	[EnumLocation.palette]: ILocation
	[EnumLocation.collection]: ILocation
	[EnumLocation.collectionColors]: ILocation
	[EnumLocation.collectionPalettes]: ILocation
}

const initialState: IInitialState = {
	[EnumLocation.picker]: {
		text: EnumLocation.picker,
		path: '/picker',
		active: false,
	},
	[EnumLocation.palette]: {
		text: EnumLocation.palette,
		path: '/palette',
		active: false,
	},
	[EnumLocation.collection]: {
		text: EnumLocation.collection,
		path: '/collection',
		active: false,
	},
	[EnumLocation.collectionColors]: {
		text: EnumLocation.collectionColors,
		path: '/collection/colors',
		active: false,
	},
	[EnumLocation.collectionPalettes]: {
		text: EnumLocation.collectionPalettes,
		path: '/collection/palettes',
		active: false,
	},
}

const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		updateLocation: (state, { payload }: PayloadAction<EnumLocation>) => {
			let key: keyof IInitialState
			for (key in state) {
				key === payload
					? (state[key].active = true)
					: (state[key].active = false)
			}
		},
		toggleLocation: (state, { payload }: PayloadAction<EnumLocation>) => {
			let key: keyof IInitialState
			for (key in state) {
				key === payload
					? (state[key].active = !state[key].active)
					: (state[key].active = false)
			}
		},
	},
})

const { actions, reducer } = locationSlice
export const { updateLocation, toggleLocation } = actions
export default reducer
