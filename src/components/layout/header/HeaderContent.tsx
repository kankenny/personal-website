import React from 'react'
import LinkMenu from '../link-menu/LinkMenu'
import Logo from '@/components/ui/Logo'

const HeaderContent = () => {
	return (
		<header className="container flex justify-between mx-auto">
			<Logo />
			<LinkMenu areHeaderLinks={true}></LinkMenu>
		</header>
	)
}

export default HeaderContent
