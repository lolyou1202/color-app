import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RGBtoHEX } from '../../hooks/functions/useRGBtoHEX'
import { getContrast } from '../../hooks/functions/getContrast'
import axios from 'axios'
import { randomColorData } from '../api/pickerRandomColor'

interface IinitialState {
	color: string
	contrastColor: string
	loading: boolean
}

const initialState: IinitialState = {
	color: '',
	contrastColor: '',
	loading: false,
}

export interface fetchRandomResults {
	result: number[][]
}

export const fetchRandom = createAsyncThunk<fetchRandomResults>(
	'openedColor/fetchRandom',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios({
				method: 'post',
				url: 'http://colormind.io/api/',
				data: JSON.stringify(randomColorData),
			})
			console.log(response.data)
			return response.data
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)

const colorSlice = createSlice({
	name: 'openedColor',
	initialState,
	reducers: {
		setColor(state, { payload }: PayloadAction<string>) {
			state.color = payload
			state.contrastColor = getContrast(payload)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchRandom.pending, (state, { payload }) => {
				state.loading = true
			})
			.addCase(fetchRandom.fulfilled, (state, { payload }) => {
				state.loading = false
				const HEX = RGBtoHEX(
					payload.result[0][0],
					payload.result[0][1],
					payload.result[0][2]
				)
				state.color = HEX

				state.contrastColor = getContrast(
					HEX.replace(/[^a-zA-Z0-9]/g, '').toUpperCase()
				)
			})
			.addCase(fetchRandom.rejected, (state, { payload }) => {
				state.loading = false
			})
	},
})

const { actions, reducer } = colorSlice
export const { setColor } = actions
export default reducer
