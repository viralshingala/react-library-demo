import http from '../http-common'

const getAllLibraries = () => {
	return http.get('/getAllLibraries')
}

const getBooksByLibrary = (libraryId) => {
	return http.get(`/getAllBooks/${libraryId}`)
}

const createBook = (data) => {
	const { libraryId, title, genre } = data
	return http.post(`/${libraryId}/book`, { title, genre })
}

const deleteBook = (bookId) => {
	return http.post(`/book/${bookId}`)
}

const updateBook = (data) => {
	return http.put(`/book/${data.bookId}`, data)
}

export default {
	getAllLibraries,
	getBooksByLibrary,
	createBook,
	deleteBook,
	updateBook
}
