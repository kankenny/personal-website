import React, { useState } from 'react'

import LinkMenu from '../link-menu/LinkMenu'
import Logo from '@/components/ui/Logo'
import HamburgerButton from './mobile/HamburgerButton'
import MobileMenu from './mobile/MobileMenu'

const HeaderContent = () => {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

	const mobileMenuHandler = () => {
		setMobileMenuIsOpen((prevState) => !prevState)
	}

	return (
		<header className="container flex justify-between mx-auto items-center px-4">
			<Logo />
			<LinkMenu areHeaderLinks={true}></LinkMenu>
			<HamburgerButton
				isMobileOpen={mobileMenuIsOpen}
				onClick={mobileMenuHandler}
			/>
			<MobileMenu isMobileOpen={mobileMenuIsOpen} />
		</header>
	)
}

export default HeaderContent
