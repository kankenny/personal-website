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
	const pathNameArr = pathName.split('/')

	return (
		<LinkItemsContainer areHeaderLinks={areHeaderLinks}>
			<Link href="/" passHref legacyBehavior>
				<LinkItem linkText="Home" isSelected={pathName === '/'} />
			</Link>
			<Link href="/projects" passHref legacyBehavior>
				<LinkItem
					linkText="Projects"
					isSelected={pathNameArr[1] === 'projects'}
				/>
			</Link>
			<Link href="/work-experience" passHref legacyBehavior>
				<LinkItem
					linkText="Work Experience"
					isSelected={pathNameArr[1] === 'work-experience'}
				/>
			</Link>
			<Link href="/academics" passHref legacyBehavior>
				<LinkItem
					linkText="Academics"
					isSelected={pathNameArr[1] === 'academics'}
				/>
			</Link>
			<Link href="/hobbies" passHref legacyBehavior>
				<LinkItem
					linkText="Hobbies"
					isSelected={pathNameArr[1] === 'hobbies'}
				/>
			</Link>
		</LinkItemsContainer>
	)
}

export default Links
