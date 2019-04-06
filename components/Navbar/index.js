import React, { Component } from 'react';
import Link from 'next/link'
// import './navbar.scss'
// import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
// import axios from 'axios'

class Navbar extends Component {
	constructor(props){
		super(props)
		this.props = props
	}

  render() {
    return (
		<nav>
			<div>
				<Link  href="/about">
					<a>
							About
					</a>
				</Link>
					<Link  href="/">
					<a>
							Api
					</a>
				</Link>
			</div>
		</nav>
    )
   }
}
// Navbar.propTypes = {
// 	todos: PropTypes.array.isRequired
// }

export default Navbar

