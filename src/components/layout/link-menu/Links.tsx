import { Fragment } from 'react'

import LinkClass from '@/utils/data-models/LinkClass'
import LinkItem from './LinkItem'
import LinkItemsContainer from './LinkItemsContainer'

type Props = {
	areHeaderLinks: boolean
}

const Links = ({ areHeaderLinks }: Props) => {
	const links = [
		new LinkClass('Work Experience', false),
		new LinkClass('Academics', false),
		new LinkClass('Projects', false),
		new LinkClass('Hobbies', false),
	]

	return (
		<LinkItemsContainer areHeaderLinks={areHeaderLinks}>
			{links.map((link) => (
				<LinkItem
					linkText={link.linkText}
					isSelected={link.isSelected}
					id={link.linkText}
					key={link.linkText}
				/>
			))}
		</LinkItemsContainer>
	)
}

export default Links
