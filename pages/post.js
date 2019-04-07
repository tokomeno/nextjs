import Navbar from '../components/Navbar'
// import "../scss/style.scss" 


import Link from 'next/link'
const post = (props) => (
	<section>
		
	<Navbar></Navbar>
		<h1>{props.url.query.title}</h1>
		<p>this is post bro</p>
	</section>
)

export default post