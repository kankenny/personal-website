import React from 'react'

import Logo from '@/components/ui/Logo'
import Links from '../../link-menu/Links'

type Props = {
	isMobileOpen: boolean
}

const MobileMenu = ({ isMobileOpen }: Props) => {
	return (
		<div
			className={`z-10 bg-darkGray absolute top-0 bottom-0 left-0 flex-col w-full text-lg text-white items-center h-min p-10 ${
				!isMobileOpen ? 'hidden' : 'flex'
			} md:hidden`}
		>
			<Links areHeaderLinks={false} />
			<hr className="my-10 border-t border-1 text-white w-full" />
			<Logo />
		</div>
	)
}

export default MobileMenu
