import Header from '@/components/layout/header/Header'
import Body from '@/components/layout/body/Body'
import Footer from '@/components/layout/footer/Footer'

import { Inter } from '@next/font/google'
import { useRef } from 'react'

const inter = Inter({
	subsets: ['latin'],
})

export default function Home() {
	const inputRef = useRef<HTMLInputElement>(null)

	const checkHandler = () => {
		console.log(inputRef.current?.value)
	}

	return (
		<main>
			<div
				className={`main-web-container flex flex-col min-h-screen ${inter.className}`}
			>
				<Header />
				<Body />
				<Footer />
			</div>
		</main>
	)
}
