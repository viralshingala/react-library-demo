import http from '../http-common'

const getAllLibraries = () => {
	return http.get('/getAllLibraries')
}

const getBooksByLibrary = (libraryId) => {
	return http.get(`/getAllBooks/${libraryId}`)
}

export default {
	getAllLibraries,
	getBooksByLibrary
}
