import React from 'react'

type Props = {
	areHeaderLinks: boolean
	children: React.ReactNode
}

const LinkItemsContainer = ({ areHeaderLinks, children }: Props) => {
	const twClasses = areHeaderLinks
		? 'hidden md:flex space-y-0 space-x-2 md:space-x-6'
		: 'flex flex-col space-y-6 space-x-0 md:space-x-6 md:space-y-0 md:flex-row my-auto'

	return <ul className={`container max-w-fit ${twClasses}`}>{children}</ul>
}

export default LinkItemsContainer
