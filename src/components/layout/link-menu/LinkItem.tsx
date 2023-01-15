import React from 'react'

type Props = {
	linkText: string
	isSelected: boolean
	key: number
}

const LinkItem = ({ linkText, isSelected, key }: Props) => {
	return (
		<li
			className="p-2 duration-200 hover:scale-110 cursor-pointer text-center font-light "
			key={key}
		>
			{linkText}
		</li>
	)
}

export default LinkItem
