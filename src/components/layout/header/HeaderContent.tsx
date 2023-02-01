import React from 'react'
import LinkMenu from '../link-menu/LinkMenu'

import SVG from '../../../public/index.svg'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const HeaderContent = () => {
	return (
		<header className="container flex justify-between mx-auto">
			<Link href="/">
				<Logo />
			</Link>
			<LinkMenu areHeaderLinks={true}></LinkMenu>
		</header>
	)
}

export default HeaderContent
