import Navbar from '../components/Navbar'
import "../scss/style.scss"


import Link from 'next/link'
const index = () => (
	<section>
	<Navbar></Navbar>
		<h1>this is next homepage</h1>
		<Link href="/about"><a>ABout</a></Link>
	</section>
)

export default index