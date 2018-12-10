import React from 'react'

import { Link } from 'react-router-dom'



const Navigation = (props) => {
	return (
		<div className="ui inverted segment">
			<div className="ui inverted secondary pointing menu">
				<Link to="/articles" className="item" >
					Article List
    			</Link>
				<Link to="/articles/new" className="item" >
					Create Article
				</Link>
			</div>
		</div>
	)
}
export default Navigation;