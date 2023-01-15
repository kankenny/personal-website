import React from 'react'

type Props = {
	twClasses?: string
	children: React.ReactNode
}

const SectionContainer = ({ twClasses, children }: Props) => {
	return (
		<div
			className={`${twClasses} shadow-md border-b border-zinc-500 border-opacity-50 h-96 `}
		>
			<div
				className="
            container mx-auto bg-red-500 h-full"
			>
				{children}
			</div>
		</div>
	)
}

export default SectionContainer
