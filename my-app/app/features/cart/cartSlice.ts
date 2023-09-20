import { createSlice } from '@reduxjs/toolkit'

interface ICartItem {
	id: string
	name: string
	amount: number
	price: number
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState: [] as ICartItem[],
	reducers: {
		updateCart: (state, action) => {
			const { id, amount } = action.payload
			return state.map((element) => {
				//  if element not in cart, add to cart
				if (element.id !== id) {
					return action.payload
				} else {
					// update the amount of the element
					return {
						...element,
						[element.amount]: (element.amount += 1),
					}
				}
			})
		},
	},
})
