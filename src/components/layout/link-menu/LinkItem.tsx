import React from 'react'

type Props = {
	linkText: string
	isSelected: boolean
	id: string
}

const LinkItem = ({ linkText, isSelected, id }: Props) => {
	return (
		<li
			className="p-2 text-sm duration-200 hover:scale-110 cursor-pointer text-center font-light tracking-wide select-none"
			key={id}
		>
			{linkText}
		</li>
	)
}

export default LinkItem
