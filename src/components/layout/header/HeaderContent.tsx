import React from 'react'
import LinkMenu from '../link-menu/LinkMenu'

const HeaderContent = () => {
	return (
		<header className="container flex justify-between mx-auto py-2">
			<div className="text-4xl">Ken</div>
			<LinkMenu areHeaderLinks={true}></LinkMenu>
		</header>
	)
}

export default HeaderContent
