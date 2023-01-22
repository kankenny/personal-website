import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import React from 'react'

import CHAKRAPETCHFONT from '@/components/ui/ChakraPetchFont'
import Projects from '@/components/routes/projects/Projects'

const index = () => {
	return (
		<main>
			<div
				className={`main-web-container flex flex-col min-h-screen ${CHAKRAPETCHFONT.className}`}
			>
				<Header />
				<Projects />
				<Footer />
			</div>
		</main>
	)
}

export default index
