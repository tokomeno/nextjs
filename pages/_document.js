import Document, {Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render(){
		return (
			<html>
				<Head>
					<title>Next Js Awasome Kit</title>
					<link rel="stylesheet" href="/_next/static/style.css"/>
				</Head>
				<body>
					<Main/>
				<NextScript /> 
				</body>
			</html>
		)
	}
}
// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
// import Document, { Html, Head, Main, NextScript } from 'next/document'

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

//   render() {
//     return (
//       <Html>
//         <Head>
//           <style>{`body { margin: 0 } /* custom! */`}</style>
//         </Head>
//         <body className="custom_class">
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }

// export default MyDocument