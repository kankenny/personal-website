import React from 'react'
import LinkMenuContainer from './LinkItemsContainer'
import Links from './Links'

type Props = {
	areHeaderLinks: boolean
}

const LinkMenu = ({ areHeaderLinks }: Props) => {
	return <Links areHeaderLinks={areHeaderLinks} />
}

export default LinkMenu
