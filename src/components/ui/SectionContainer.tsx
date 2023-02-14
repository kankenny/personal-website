import React from 'react'

type Props = {
	twClasses?: string
	children: React.ReactNode
}

const SectionContainer = ({ twClasses, children }: Props) => {
	return (
		<div
			className={`bg-black text-white shadow-md border-b border-zinc-500 border-opacity-50 pb-14 px-12 md:px-6 ${twClasses}`}
		>
			<div className="container mx-auto">{children}</div>
		</div>
	)
}

export default SectionContainer
