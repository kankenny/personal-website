import React from 'react'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import WorkExperience from '@/components/routes/work-experience/WorkExperience'

import CHAKRAPETCHFONT from '@/components/ui/ChakraPetchFont'

const index = () => {
	return (
		<main>
			<div
				className={`main-web-container flex flex-col min-h-screen ${CHAKRAPETCHFONT.className}`}
			>
				<Header />
				<WorkExperience />
				<Footer />
			</div>
		</main>
	)
}

export default index
