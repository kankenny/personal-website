import React from 'react'

type Props = {
	twClasses?: string
	children: React.ReactNode
}

const SectionContainer = ({ twClasses, children }: Props) => {
	return (
		<div
			className={`${twClasses} shadow-md border-b border-zinc-500 border-opacity-50 h-auto min-h-[24rem] pb-14`}
		>
			<div
				className="
            container mx-auto  h-full"
			>
				{children}
			</div>
		</div>
	)
}

export default SectionContainer
