import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getContrast } from '../../hooks/functions/getContrast'
import chroma from 'chroma-js'
import { getRandomInt } from '../../hooks/functions/getRandomInt'
import axios from 'axios'
import { API_Huemint } from '../api/api'

export interface Ipalette {
	id: number
	HEX: string
	contrastHEX: string
	lock: boolean
	saved: boolean
}

interface IinitialState {
	palette: Ipalette[]
	loading: boolean
}

const initialState: IinitialState = {
	palette: [],
	loading: false,
}

interface ColorsBetweenArgs {
	index: number
	number: number
	firstColor: string
	lastColor: string
}

export interface fetchHuemintResults {
	results: { palette: string[]; score: number }[]
}

export interface fetchHuemintArgs {
	mode?: 'transformer' | 'diffusion' | 'random'
	numColors?: number
	temperature?: string
	numResults?: number
	adjacency: string[]
	palette: string[]
}

export const fetchPalette = createAsyncThunk<
	fetchHuemintResults,
	fetchHuemintArgs
>(
	'openedPalette/fetchPalette',
	async (
		{
			mode = 'diffusion',
			numColors = 4,
			temperature = '0.2',
			numResults = 1,
			adjacency,
			palette,
		},
		{ rejectWithValue }
	) => {
		try {
			console.log({
				mode,
				num_colors: numColors,
				temperature,
				num_results: numResults,
				adjacency,
				palette,
			})

			const response = await axios<fetchHuemintResults>({
				method: 'post',
				url: API_Huemint,
				data: {
					mode,
					num_colors: numColors,
					temperature,
					num_results: numResults,
					adjacency,
					palette,
				},
			})
			console.log(response.data)

			return response.data
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)

const paletteSlice = createSlice({
	name: 'openedPalette',
	initialState,
	reducers: {
		addColorsBetweenColors(
			state,
			{ payload }: PayloadAction<ColorsBetweenArgs>
		) {
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
		swapColors(
			state,
			{
				payload,
			}: PayloadAction<{ currentPosition: number; subsequent: number }>
		) {
			;[
				state.palette[payload.currentPosition],
				state.palette[payload.subsequent],
			] = [
				state.palette[payload.subsequent],
				state.palette[payload.currentPosition],
			]
		},
		onChangeColor(
			state,
			{ payload }: PayloadAction<{ position: number; HEX: string }>
		) {
			state.palette[payload.position].HEX = payload.HEX
			state.palette[payload.position].contrastHEX = getContrast(
				payload.HEX
			)
		},
		onRemove(state, { payload }: PayloadAction<{ positionIndex: number }>) {
			state.palette.splice(payload.positionIndex, 1)
		},
		onSave(state, { payload }: PayloadAction<{ positionIndex: number }>) {
			const prevState = state.palette[payload.positionIndex].saved
			state.palette[payload.positionIndex].saved = !prevState
		},
		onChangeSave(
			state,
			{ payload }: PayloadAction<{ positionIndex: number }>
		) {
			state.palette[payload.positionIndex].saved = true
		},
		onChangeUnsave(
			state,
			{ payload }: PayloadAction<{ positionIndex: number }>
		) {
			state.palette[payload.positionIndex].saved = false
		},
		onLock(state, { payload }: PayloadAction<{ positionIndex: number }>) {
			const prevState = state.palette[payload.positionIndex].lock
			state.palette[payload.positionIndex].lock = !prevState
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchPalette.pending, state => {
			state.loading = true
		})
		builder.addCase(fetchPalette.fulfilled, (state, { payload }) => {
			state.loading = false
			state.palette = payload.results[0].palette.map(color => ({
				id: getRandomInt(100, 10000),
				HEX: color.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(),
				contrastHEX: getContrast(color).toUpperCase(),
				lock: false,
				saved: false,
			}))
		})
	},
})

const { actions, reducer } = paletteSlice
export const {
	addColorsBetweenColors,
	fillPalette,
	swapColors,
	onChangeColor,
	onRemove,
	onSave,
	onChangeSave,
	onChangeUnsave,
	onLock,
} = actions
export default reducer
