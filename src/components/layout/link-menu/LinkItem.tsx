import React, { MouseEventHandler } from 'react'

type Props = {
	onClick?: MouseEventHandler
	href?: string
	linkText: string
}

type Ref = HTMLAnchorElement

const LinkItem = React.forwardRef<Ref, Props>(
	({ onClick, href, linkText }, ref) => {
		return (
			<a
				className="p-2 text-md duration-200 hover:scale-110 cursor-pointer text-center font-light tracking-wide select-none"
				onClick={onClick}
				href={href}
				ref={ref}
			>
				{linkText}
			</a>
		)
	}
)

LinkItem.displayName = 'LinkItem'

export default LinkItem
