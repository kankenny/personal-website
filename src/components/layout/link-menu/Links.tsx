import { useRouter } from 'next/router'

import Link from 'next/link'
import LinkItem from './LinkItem'
import LinkItemsContainer from './LinkItemsContainer'

type Props = {
	areHeaderLinks: boolean
}

const Links = ({ areHeaderLinks }: Props) => {
	const router = useRouter()
	const pathName = router.pathname
	console.log(pathName)

	return (
		<LinkItemsContainer areHeaderLinks={areHeaderLinks}>
			<Link href="/" passHref legacyBehavior>
				<LinkItem
					linkText="Home"
					twClasses={
						pathName === '/' ? 'text-bold bg-purple-500' : ''
					}
				></LinkItem>
			</Link>
			<Link href="/work-experience" passHref legacyBehavior>
				<LinkItem
					linkText="Work Experience"
					twClasses={
						pathName === '/work-experience'
							? 'text-bold bg-purple-500'
							: ''
					}
				></LinkItem>
			</Link>
			<Link href="/academics" passHref legacyBehavior>
				<LinkItem
					linkText="Academics"
					twClasses={
						pathName === '/academics'
							? 'text-bold bg-purple-500'
							: ''
					}
				></LinkItem>
			</Link>
			<Link href="/projects" passHref legacyBehavior>
				<LinkItem
					linkText="Projects"
					twClasses={
						pathName === '/projects'
							? 'text-bold bg-purple-500'
							: ''
					}
				></LinkItem>
			</Link>
			<Link href="/hobbies" passHref legacyBehavior>
				<LinkItem
					linkText="Hobbies"
					twClasses={
						pathName === '/hobbies'
							? 'text-bold bg-purple-500'
							: ''
					}
				></LinkItem>
			</Link>
		</LinkItemsContainer>
	)
}

export default Links
