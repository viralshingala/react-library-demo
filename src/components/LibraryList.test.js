import React from 'react'
import LibraryList from './LibraryList'
import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from 'enzyme'

configure({ adapter: new Adapter() })
describe('LibraryList', () => {
	it('Basic test case :: WWithout data', () => {
		const wrapper = mount(<LibraryList />)
		expect(wrapper).toEqual({})
	})
})
