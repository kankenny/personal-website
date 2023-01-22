import React from 'react'

import Footer from './footer/Footer'
import Header from './header/Header'

import CHAKRAPETCHFONT from '../ui/ChakraPetchFont'

type Props = {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<div
			className={`main-web-container flex flex-col min-h-screen ${CHAKRAPETCHFONT.className}`}
		>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
