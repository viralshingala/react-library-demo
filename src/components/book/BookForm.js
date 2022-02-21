import React from 'react'
import { Form, Input, Modal, Button, Select } from 'antd'

const { Option } = Select

const BookForm = ({ libraries, books, selectedBook, isEditMode, isModalVisible, handleSave, handleCancel }) => {
	const onFinish = (values) => {
		handleSave(values)
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Modal title={isEditMode ? 'Edit Book' : 'Add Book'} visible={isModalVisible} onOk={handleSave} onCancel={handleCancel} footer={[]}>
			<Form name='basic' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
				<Form.Item name='libraryId' label='Library' rules={[{ required: true, message: 'Please select library!' }]} initialValue={isEditMode ? selectedBook.library_id : ''}>
					<Select placeholder='select library'>
						{libraries &&
							libraries.map(({ id, name }) => (
								<Option key={id} value={id}>
									{name}
								</Option>
							))}
					</Select>
				</Form.Item>
				<Form.Item
					label='Title'
					name='title'
					rules={[
						{ required: true, message: 'Please provide title!' }
						// {
						// 	validator: (_, value) => {
						// 		const titles = books.map((book) => book.title)
						// 		return !titles.includes(value) ? Promise.resolve() : Promise.reject(new Error('Please provide unique book title'))
						// 	}
						// }
					]}
					initialValue={isEditMode ? selectedBook.title : ''}
				>
					<Input />
				</Form.Item>
				<Form.Item label='Genre' name='genre' rules={[{ required: true, message: 'Please provide genre!' }]} initialValue={isEditMode ? selectedBook.genre : ''}>
					<Input />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary' htmlType='submit'>
						{isEditMode ? 'Update' : 'Save'}
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default BookForm
