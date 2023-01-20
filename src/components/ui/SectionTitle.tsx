import React from 'react'

type Props = {
	sectionTitle: string
	isOdd?: boolean
}

const SectionTitle = ({ sectionTitle, isOdd }: Props) => {
	return (
		<div className="p-4">
			<h2 className="uppercase w-[40%] mx-auto text-zinc-600 text-sm text-center border-b-zinc-600 border-b leading-[.1em] mt-[10px] my-[20px]">
				<span
					className={`px-[10px] tracking-widest ${
						isOdd ? 'bg-zinc-200' : 'bg-zinc-100'
					}`}
				>
					{sectionTitle}
				</span>
			</h2>
		</div>
	)
}

export default SectionTitle
