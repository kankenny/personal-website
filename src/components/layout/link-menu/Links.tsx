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

	return (
		<LinkItemsContainer areHeaderLinks={areHeaderLinks}>
			<Link href="/" passHref legacyBehavior>
				<LinkItem linkText="Home" isSelected={pathName === '/'} />
			</Link>
			<Link href="/projects" passHref legacyBehavior>
				<LinkItem
					linkText="Projects"
					isSelected={pathName === '/projects'}
				/>
			</Link>
			<Link href="/work-experience" passHref legacyBehavior>
				<LinkItem
					linkText="Work Experience"
					isSelected={pathName === '/work-experience'}
				/>
			</Link>
			<Link href="/academics" passHref legacyBehavior>
				<LinkItem
					linkText="Academics"
					isSelected={pathName === '/academics'}
				/>
			</Link>
			<Link href="/hobbies" passHref legacyBehavior>
				<LinkItem
					linkText="Hobbies"
					isSelected={pathName === '/hobbies'}
				/>
			</Link>
		</LinkItemsContainer>
	)
}

export default Links
