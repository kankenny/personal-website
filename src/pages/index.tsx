import Test from '@/components/Test'
import { Inter } from '@next/font/google'

const inter = Inter({
	subsets: ['latin'],
})

export default function Home() {
	return (
		<main className={inter.className}>
			<div className="h-screen w-screen bg-zinc-900">
				<Test />
			</div>
		</main>
	)
}
