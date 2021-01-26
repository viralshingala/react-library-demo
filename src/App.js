import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import LibraryList from './components/LibraryList'

function App() {
	return (
		<div>
			<nav className='navbar navbar-expand navbar-dark bg-dark'>
				<a href='/libraries' className='navbar-brand'>
					Portal
				</a>
			</nav>

			<div className='container mt-3'>
				<Switch>
					<Route exact path={['/', '/libraries']} component={LibraryList} />
				</Switch>
			</div>
		</div>
	)
}

export default App
