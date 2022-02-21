import React from 'react'
import { Button, Typography } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

const { Title } = Typography

const Book = ({ data, onEditClick, onDeleteClick }) => {
	const libraries = useSelector((state) => state.libraries)

	const library = (data && libraries.find((el) => el.id === data.library_id)?.name) || ''
	return (
		<>
			{!!data ? (
				<>
					<Title level={2}>{data.title}</Title>
					<Title level={5}>{`Genre :-- ${data.genre}`}</Title>
					<Title level={5}>{`Library :-- ${library} collection`}</Title>
					<Button className='edit-book-btn' type='link' onClick={onEditClick}>
						<EditOutlined />
					</Button>
					<Button className='dlt-book-btn' type='link' danger onClick={onDeleteClick}>
						<DeleteOutlined />
					</Button>
				</>
			) : (
				<Title level={3}>Please select available book</Title>
			)}
		</>
	)
}

export default React.memo(Book)
