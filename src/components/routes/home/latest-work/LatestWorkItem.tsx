import React from 'react'

import Card from '@/components/ui/Card'

type Props = {
	img: string
	title: string
	workType: string
}

const LatestWorkItem = ({ img, title, workType }: Props) => {
	return (
		<li>
			<Card twClasses="w-56 duration-200 hover:scale-105 p-2 tracking-wide">
				{/* // eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={img}
					alt={title}
					className="bg-zinc-600 rounded-lg cursor-pointer object-contain"
				/>
				<div className="p-2 file:tracking-wide">
					<h1 className="">{title}</h1>
					<h2 className="text-zinc-600 text-sm">{workType}</h2>
				</div>
			</Card>
		</li>
	)
}

export default LatestWorkItem
