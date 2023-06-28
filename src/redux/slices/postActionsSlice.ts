import { createSlice } from '@reduxjs/toolkit'

export interface IpostActionsStack {
	id: number
	nameAction: string
	actionID: number
}
export interface IaddingColors {
	id: number
}
export interface ImovingColors {
	id: number
}
export interface IremovingColor {
	id: number
}
export interface IselectingColor {
	id: number
}
export interface IgeneratingPalette {
	id: number
}

interface IinitialState {
	postActionsStack: IpostActionsStack[]
	addingColors: IaddingColors[]
	movingColors: ImovingColors[]
	removingColor: IremovingColor[]
	selectingColor: IselectingColor[]
	generatingPalette: IgeneratingPalette[]
}

const initialState: IinitialState = {
	postActionsStack: [],
	addingColors: [],
	movingColors: [],
	removingColor: [],
	selectingColor: [],
	generatingPalette: [],
}

const postActions = createSlice({
	name: 'postActions',
	initialState,
	reducers: {},
	extraReducers: builder => {},
})

const { actions, reducer } = postActions
export const {} = actions
export default reducer
