
import React, { Component } from 'react'

const ContextList = React.createContext()

class ContextProvider extends Component {
	state = {
		User: '',
		List:'',
	}
	

	render() {
		return (
			<ContextList.Provider
				value={{
					...this.state,
				}}>
				{this.props.children}
			</ContextList.Provider>
		)
	}
}


export { ContextList, ContextProvider }