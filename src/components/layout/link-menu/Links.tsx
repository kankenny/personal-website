import { Fragment } from 'react'

import LinkClass from '@/data-models/LinkClass'
import LinkItem from './LinkItem'
import LinkItemsContainer from './LinkItemsContainer'

type Props = {
	areHeaderLinks: boolean
}

const Links = ({ areHeaderLinks }: Props) => {
	const links = [
		new LinkClass('Home', false),
		new LinkClass('Academics', false),
		new LinkClass('Hobbies', false),
		new LinkClass('Projects', false),
	]

	return (
		<LinkItemsContainer areHeaderLinks={areHeaderLinks}>
			{links.map((link, index) => (
				<LinkItem
					linkText={link.linkText}
					isSelected={link.isSelected}
					key={index}
				/>
			))}
		</LinkItemsContainer>
	)
}

export default Links
