import React from 'react'

import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'

const index = () => {
	return (
		<main>
			<div className={`main-web-container flex flex-col min-h-screen`}>
				<Header />
				<Footer />
			</div>
		</main>
	)
}

export default index
