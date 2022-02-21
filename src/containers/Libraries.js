import React, { useState, useEffect } from 'react'
import { Layout, Button, Skeleton } from 'antd'
import LibraryService from '../services/LibraryService'
import LibraryMenu from '../components/library/LibraryMenu'
import Book from '../components/book/Book'
import BookForm from '../components/book/BookForm'
import { useDispatch, useSelector } from 'react-redux'
import { selectBook, updateBooks, updateLoading } from '../store/bookSlice'
import { collectBooks } from '../util/constants'

const { Header, Sider, Content } = Layout

const Libraries = () => {
	const { libraries, books, selectedBook, isLoading } = useSelector((state) => state)
	const dispatch = useDispatch()

	const [isEditMode, setEditMode] = useState(false)
	const [isModalVisible, setIsModalVisible] = useState(false)

	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleSave = async (values) => {
		setIsModalVisible(false)
		if (isEditMode) {
			await LibraryService.updateBook({ ...values, bookId: selectedBook.id }).then((res) => {
				dispatch(selectBook({ ...values, library_id: values.libraryId, id: selectedBook.id }))
			})
		} else {
			await LibraryService.createBook(values).then((res) => retrieveLibraries())
		}
		console.log('Success:', values)
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}

	useEffect(() => {
		retrieveLibraries()
	}, [])

	const handleMenuClick = (e) => {
		if (books?.length > 0) {
			const book = books.find((el) => el.id.toString() === e.key)
			dispatch(selectBook(book))
		}
	}

	const onEditClick = () => {
		setEditMode(true)
		showModal()
	}

	const onDeleteClick = () => {
		LibraryService.deleteBook(selectedBook.id)
			.then((res) => {
				retrieveLibraries()
			})
			.catch((e) => console.log(e))
	}

	const onAddClick = () => {
		setEditMode(false)
		showModal()
	}

	const retrieveLibraries = () => {
		dispatch(updateLoading(true))
		LibraryService.getAllLibraries()
			.then(({ data }) => {
				if (data?.length > 0) {
					dispatch(updateBooks({ libraries: data, books: collectBooks(data) }))
					dispatch(selectBook(undefined))
				}
			})
			.catch((e) => {
				// Track error
				console.log(e)
			})
			.finally(() => {
				dispatch(updateLoading(false))
			})
	}

	return (
		<Layout>
			<Header className='header'>
				Library Collections
				<Button className='add-book-btn' type='primary' onClick={onAddClick}>
					Add Book
				</Button>
			</Header>
			{isLoading ? (
				<Skeleton />
			) : (
				<Content style={{ padding: 48 }}>
					<Layout>
						<Sider>
							<LibraryMenu libraries={libraries} handleMenuClick={handleMenuClick} />
						</Sider>
						<Content style={{ padding: 48 }}>
							<Book data={selectedBook} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
						</Content>
					</Layout>
				</Content>
			)}

			{isModalVisible && <BookForm isEditMode={isEditMode} selectedBook={selectedBook} books={books} libraries={libraries} handleSave={handleSave} handleCancel={handleCancel} isModalVisible />}
		</Layout>
	)
}

export default Libraries
