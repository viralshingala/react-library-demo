import React, { Component, useEffect, useState } from 'react'

export class DataFetcher extends Component {
	state = {
		data: []
	}

	test = () => {
		let result = false
		const strArr = '2(((&-))( ,..)'.split('')
		let count = 0
		let close = 0
		for (let el of strArr) {
			if (el === '(') {
				count++
			} else if (el === ')') {
				count--
			}
		}
		result = count !== 0
		console.log(`result -> ${result}`)
	}

	componentDidMount() {
		fetch('https://reduxblog.herokuapp.com/api/posts?key=123').then((response) => {
			response.json().then((res) => {
				console.log(res)
				this.setState({ data: res })
			})
		})
	}

	render() {
		this.test()
		const { data } = this.state
		return (
			<div>
				{data && data.length > 0 ? (
					<div>
						{data.map((ele) => {
							return (
								<div key={ele.id}>
									<div>{ele.title}</div>
									<div>{ele.content}</div>
								</div>
							)
						})}
					</div>
				) : null}
			</div>
		)
	}
}

// export const DataFetcher = () => {
// 	const [data, setData] = useState([])

// 	useEffect(() => {
// 		fetch('https://reduxblog.herokuapp.com/api/posts?key=123').then((response) => {
// 			response.json().then((res) => {
// 				console.log(res)
// 				setData(res)
// 			})
// 		})
// 	}, [])

// 	return (
// 		<div>
// 			{data && data.length > 0 ? (
// 				<div>
// 					{data.map((ele) => {
// 						return (
// 							<div>
// 								<div>{ele.title}</div>
// 								<div>{ele.content}</div>
// 							</div>
// 						)
// 					})}
// 				</div>
// 			) : null}
// 		</div>
// 	)
// }
