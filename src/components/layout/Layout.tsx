import React from 'react'
import { motion } from 'framer-motion'

import Footer from './footer/Footer'
import Header from './header/Header'

import CHAKRAPETCHFONT from '../ui/ChakraPetchFont'

type Props = {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<div
			className={`main-web-container flex flex-col min-h-screen text-black ${CHAKRAPETCHFONT.className}`}
		>
			<Header />
			<div id="portal" />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
