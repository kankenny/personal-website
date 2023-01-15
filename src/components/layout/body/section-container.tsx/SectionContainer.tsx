import React from 'react'

type Props = {
	twClasses?: string
	children: React.ReactNode
}

const SectionContainer = ({ twClasses, children }: Props) => {
	return (
		<div
			className={`${twClasses} w-full shadow-md border-b border-zinc-100 h-96 px-5`}
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
