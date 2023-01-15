import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import StyledInputRef from '@/components/ui/StyledInputRef'
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
		<main className={`main-web-container ${inter.className}`}>
			<Card>Test</Card>
			<Button buttonText="Test" />
			<StyledInputRef type="text" ref={inputRef} />
			<button onClick={checkHandler}>testest</button>
		</main>
	)
}
