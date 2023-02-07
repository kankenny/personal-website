import React, { MouseEventHandler } from 'react'

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
				className={`p-2 text-sm md:text-md duration-200 hover:scale-110 hover:bg-main hover:bg-opacity-30 cursor-pointer text-center tracking-wide select-none rounded-2xl ${
					isSelected &&
					'font-extrabold bg-purple-900 hover:bg-main hover:bg-opacity-100 hover:scale-100'
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
