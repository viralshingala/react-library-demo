import React, { useState, useEffect } from 'react'
import LibraryService from '../services/LibraryService'

const LibraryList = () => {
	const [libraries, setLibraries] = useState([])
	const [currentLibrary, setCurrentLibrary] = useState(null)
	const [currentIndex, setCurrentIndex] = useState(-1)
	const [error, setError] = useState(undefined)

	useEffect(() => {
		retrieveLibraries()
	}, [])

	const retrieveLibraries = () => {
		LibraryService.getAllLibraries()
			.then((response) => {
				setLibraries(response.data)
				if (response.data?.length > 0) {
					setActiveLibrary(response.data[0], 0)
				}
			})
			.catch((e) => {
				console.log(e)
				setError(e?.response?.data?.message)
			})
	}

	const setActiveLibrary = (library, index) => {
		setCurrentLibrary(library)
		setCurrentIndex(index)
	}

	return !!error ? (
		`${error}`
	) : (
		<div className='list row'>
			<div className='col-md-6'>
				<ul className='list-group'>
					{libraries &&
						libraries.map((library, index) => (
							<li className={'list-group-item ' + (index === currentIndex ? 'active' : '')} onClick={() => setActiveLibrary(library, index)} key={index}>
								{library.name}
							</li>
						))}
				</ul>
			</div>
			<div className='col-md-6'>
				{currentLibrary ? (
					<>
						<br />
						<h4>Books</h4>
						<br />
						{currentLibrary.books.length > 0 ? (
							currentLibrary.books.map((book) => {
								return (
									<div>
										<div>
											<label>
												<strong>Title:</strong>
											</label>{' '}
											{book.title}
										</div>
										<div>
											<label>
												<strong>Genre:</strong>
											</label>{' '}
											{book.genre}
										</div>
										<br />
									</div>
								)
							})
						) : (
							<div>
								<br />
								<p>No books available...</p>
							</div>
						)}
					</>
				) : null}
			</div>
		</div>
	)
}

export default LibraryList
