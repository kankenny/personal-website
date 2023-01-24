import React from 'react'

type Props = {
	twClasses?: string
	children: React.ReactNode
}

const SectionContainer = ({ twClasses, children }: Props) => {
	return (
		<div
			className={`shadow-md border-b border-zinc-500 border-opacity-50 pb-14 ${twClasses}`}
		>
			<div className="container mx-auto">{children}</div>
		</div>
	)
}

export default SectionContainer
