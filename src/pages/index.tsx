import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

import HomePage from '@/components/routes/home/HomePage'

import CHAKRAPETCHFONT from '@/components/ui/ChakraPetchFont'

export default function Home() {
	return (
		<main>
			<div
				className={`main-web-container flex flex-col min-h-screen ${CHAKRAPETCHFONT.className}`}
			>
				<Header />
				<HomePage />
				<Footer />
			</div>
		</main>
	)
}
