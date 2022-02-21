import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Menu } from 'antd'
import { Provider } from 'react-redux'
import Libraries from './containers/Libraries'
import store from './store/store'

import 'antd/dist/antd.css'
import './App.scss'

function App() {
	return (
		<Provider store={store}>
			<div>
				<Menu mode='horizontal'>
					<Menu.Item key='mail'>
						<a href='/libraries' className='navbar-brand'>
							Portal
						</a>
					</Menu.Item>
				</Menu>

				<div className='container mt-3'>
					<Switch>
						<Route exact path={['/', '/libraries']} component={Libraries} />
					</Switch>
				</div>
			</div>
		</Provider>
	)
}

export default App
