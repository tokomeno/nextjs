import Navbar from '../components/Navbar'
import "../scss/style.scss"


import Link from 'next/link'
const Index = (props) => (
	<section>
	<Navbar></Navbar>
		<h1>this is next homepage</h1>
		<Link href="/about"><a>ABout</a></Link>
	

<Link as={`/posts/${props.slug}`} href={`/post?title=${props.title}`}><a>ABout</a></Link>

	</section>
)


Index.getInitialProps = async function(props){
	let title = "Latest post on next js"

	return {
		title,
		slug: 'latest-post'
	}
}
export default Index