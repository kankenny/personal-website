import React, { MouseEventHandler } from 'react'

import { useRouter } from 'next/router'

type Props = {
	onClick?: MouseEventHandler
	href?: string
	linkText: string
	isSelected: boolean
}

type Ref = HTMLAnchorElement

const LinkItem = React.forwardRef<Ref, Props>(
	({ onClick, href, linkText, isSelected }, ref) => {
		return (
			<a
				className={`p-2 text-md duration-200 hover:scale-110 cursor-pointer text-center font-light tracking-wide select-none rounded-2xl ${
					isSelected &&
					'text-bold bg-purple-500 border-2 border-zinc-900'
				}`}
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
