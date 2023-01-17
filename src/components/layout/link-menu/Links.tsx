import { Fragment } from 'react'
import Link from 'next/link'

import LinkClass from '@/utils/data-models/LinkClass'
import LinkItem from './LinkItem'
import LinkItemsContainer from './LinkItemsContainer'

type Props = {
	areHeaderLinks: boolean
}

const Links = ({ areHeaderLinks }: Props) => {
	return (
		<LinkItemsContainer areHeaderLinks={areHeaderLinks}>
			<Link href="/" passHref legacyBehavior>
				<LinkItem linkText="Home"></LinkItem>
			</Link>
			<Link href="/work-experience" passHref legacyBehavior>
				<LinkItem linkText="Work Experience"></LinkItem>
			</Link>
			<Link href="/academics" passHref legacyBehavior>
				<LinkItem linkText="Academics"></LinkItem>
			</Link>
			<Link href="/projects" passHref legacyBehavior>
				<LinkItem linkText="Projects"></LinkItem>
			</Link>
			<Link href="/hobbies" passHref legacyBehavior>
				<LinkItem linkText="Hobbies"></LinkItem>
			</Link>
		</LinkItemsContainer>
	)
}

export default Links
