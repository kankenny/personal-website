import React from 'react'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href="/">
			<div className="text-4xl duration-500 hover:rotate-360 ease-in-out cursor-pointer hover:scale-150">
				KB
			</div>
		</Link>
	)
}

export default Logo
