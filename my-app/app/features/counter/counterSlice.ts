import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
	value: number
}

const initialState: CounterState = {
	value: 5,
}

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		// increment
		increment(state) {
			state.value += 1
		},
		//decrement
		decrement(state) {
			state.value -= 1
		},
	},
})

// action creators - make and return an action object
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
