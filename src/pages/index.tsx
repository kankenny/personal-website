import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Inter } from '@next/font/google'

const inter = Inter({
	subsets: ['latin'],
})

export default function Home() {
	return (
		<main className={`main-web-container ${inter.className}`}>
			<Card>Test</Card>
			<Button buttonText="Test" />
		</main>
	)
}
