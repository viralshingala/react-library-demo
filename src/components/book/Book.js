import React from 'react'
import { Button, Tooltip, Typography } from 'antd'
import { ArrowRightOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import Layout, { Content, Footer } from 'antd/lib/layout/layout'
import Text from 'antd/lib/typography/Text'

const { Title } = Typography

const Book = ({ data, onEditClick, onDeleteClick }) => {
	const libraries = useSelector((state) => state.libraries)

	const library = (data && libraries.find((el) => el.id === data.library_id)?.name) || ''
	return (
		<>
			{!!data ? (
				<>
					<Layout>
						<Content>
							<Title level={2}>{data.title}</Title>
							<Title level={5}>
								<Text mark underline>
									{`Genre`}
								</Text>
								{`  `}
								<ArrowRightOutlined />
								{`  ${data.genre}`}
							</Title>
							<Title level={5}>
								<Text mark underline>
									{`Library`}
								</Text>
								{`  `}
								<ArrowRightOutlined />
								{`  ${library} collection`}
							</Title>
						</Content>
						<Footer>
							<Tooltip title='Edit book' placement='bottom' color='blue'>
								<Button className='action-btn' type='primary' icon={<EditOutlined />} shape='circle' onClick={onEditClick} />
							</Tooltip>
							<Tooltip title='Delete book' placement='bottom' color='red'>
								<Button className='action-btn' type='primary' icon={<DeleteOutlined />} shape='circle' danger onClick={onDeleteClick} />
							</Tooltip>
						</Footer>
					</Layout>
				</>
			) : (
				<Title level={3}>Please select available book</Title>
			)}
		</>
	)
}

export default React.memo(Book)
