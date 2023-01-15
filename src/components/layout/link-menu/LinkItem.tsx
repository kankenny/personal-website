import React from 'react'

type Props = {
	linkText: string
	isSelected: boolean
	key: number
}

const LinkItem = ({ linkText, isSelected, key }: Props) => {
	return (
		<li
			className="bg-purple-500 p-2 shadow-lg rounded-lg duration-200 hover:scale-105 cursor-pointer border border-purple-900 border-opacity-10 text-center font-light "
			key={key}
		>
			{linkText}
		</li>
	)
}

export default LinkItem
