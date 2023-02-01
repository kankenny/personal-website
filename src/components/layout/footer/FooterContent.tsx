import React from 'react'

import Logo from '@/components/ui/Logo'
import LinkMenu from '../link-menu/LinkMenu'

// className = 'container flex justify-between mx-auto py-2'

const FooterContent = () => {
	return (
		<footer className="container flex flex-col md:flex-row md:justify-between mx-auto py-2 items-center space-y-10 md:space-y-0">
			<LinkMenu areHeaderLinks={false} />
			<Logo />
		</footer>
	)
}

export default FooterContent
