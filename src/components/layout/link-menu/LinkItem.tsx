import React, { MouseEventHandler } from 'react'

import { useRouter } from 'next/router'

type Props = {
	onClick?: MouseEventHandler
	linkText: string
	isSelected: boolean
}

type Ref = HTMLAnchorElement

const LinkItem = React.forwardRef<Ref, Props>(
	({ onClick, linkText, isSelected }, ref) => {
		return (
			<a
				className={`p-2 text-sm md:text-md duration-200 hover:scale-110 hover:bg-purple-500 hover:bg-opacity-30 cursor-pointer text-center font-light tracking-wide select-none rounded-2xl ${
					isSelected &&
					'font-extrabold bg-purple-500 hover:bg-purple-500 hover:bg-opacity-100 hover:scale-100'
				}`}
				onClick={onClick}
				ref={ref}
			>
				{linkText}
			</a>
		)
	}
)

LinkItem.displayName = 'LinkItem'

export default LinkItem
