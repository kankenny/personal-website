import React from 'react'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import WorkExperience from '@/components/routes/work-experience/WorkExperience'

const index = () => {
	return (
		<main>
			<div className={`main-web-container flex flex-col min-h-screen`}>
				<Header />
				<WorkExperience />
				<Footer />
			</div>
		</main>
	)
}

export default index
