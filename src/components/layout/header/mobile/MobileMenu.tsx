import React from 'react'

import Links from '../../link-menu/Links'

type Props = {
	isMobileOpen: boolean
}

const MobileMenu = ({ isMobileOpen }: Props) => {
	return (
		<div
			className={`bg-darkGray absolute top-0 bottom-0 left-0 flex-col  w-full space-y-3 text-lg text-white items-center h-min p-10 ${
				!isMobileOpen ? 'hidden' : 'flex'
			} md:hidden`}
		>
			<Links areHeaderLinks={false} />
		</div>
	)
}

export default MobileMenu
