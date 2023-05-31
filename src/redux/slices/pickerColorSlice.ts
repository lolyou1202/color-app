import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getContrast } from '../../hooks/functions/getContrast'
import axios from 'axios'
import { randomColorData } from '../api/pickerRandomColor'
import { redirect } from 'react-router-dom'

interface IInitialState {
	color: string
	contrastColor: string
}

const initialState: IInitialState = {
	color: '',
	contrastColor: '',
}

interface results {
	palette: string[]
	score: number
}

export interface fetchRandomResults {
	results: results[]
}

export const fetchRandom = createAsyncThunk<fetchRandomResults>(
	'colorsStore/fetchRandom',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios({
				method: 'post',
				url: 'https://api.huemint.com/color',
				data: randomColorData,
			})
			redirect('/picker/123')
			return response.data
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)

const pickerColorSlice = createSlice({
	name: 'colorsStore',
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
				//console.log(payload)
			})
			.addCase(fetchRandom.fulfilled, (state, { payload }) => {
				state.color = payload.results[0].palette[0]
				console.log(payload.results[0].palette[0]);
			})
			.addCase(fetchRandom.rejected, (state, { payload }) => {
				//console.log(payload)
			})
	},
})

const { actions, reducer } = pickerColorSlice
export const { setColor } = actions
export default reducer
