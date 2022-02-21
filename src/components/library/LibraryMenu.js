import React from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
const { SubMenu } = Menu

const LibraryMenu = ({ libraries, handleMenuClick }) => {
	return (
		<Menu mode='vertical'>
			{libraries &&
				libraries.map(({ name, books }) => (
					<SubMenu key={name} icon={<AppstoreOutlined />} title={name}>
						{books &&
							books.map(({ id, title }) => (
								<Menu.Item onClick={handleMenuClick} key={id}>
									{title}
								</Menu.Item>
							))}
					</SubMenu>
				))}
		</Menu>
	)
}

export default React.memo(LibraryMenu)
