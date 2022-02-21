import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
	name: 'book',
	initialState: {
		libraries: [],
		books: [],
		selectedBook: undefined,
		isLoading: false
	},
	reducers: {
		updateBooks: (state, action) => {
			state.books = action.payload.books
			state.libraries = action.payload.libraries
		},
		selectBook: (state, action) => {
			state.selectedBook = action.payload
		},
		updateLoading: (state, action) => {
			state.isLoading = action.payload
		}
	}
})

// Action creators are generated for each case reducer function
export const { updateBooks, selectBook, updateLoading } = bookSlice.actions

export default bookSlice.reducer
