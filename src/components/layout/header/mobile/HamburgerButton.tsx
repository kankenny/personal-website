import React from 'react'

type Props = {
	onClick: () => void
	isMobileOpen: boolean
}

const HamburgerButton = ({ onClick, isMobileOpen }: Props) => {
	return (
		<div className="text-red-500 md:hidden mt-2">
			<button
				id="menu-btn"
				type="button"
				onClick={onClick}
				className={`z-40 block hamburger md:hidden focus:outline-none ${
					isMobileOpen ? 'open' : ''
				}`}
			>
				<span className="hamburger-top"></span>
				<span className="hamburger-middle"></span>
				<span className="hamburger-bottom"></span>
			</button>
		</div>
	)
}

export default HamburgerButton
