import React from 'react'

import Card from '@/components/ui/Card'

type Props = {
	img: string
	title: string
	workType: string
}

const LatestWorkItem = ({ img, title, workType }: Props) => {
	return (
		<Card twClasses="max-w-fit min-w-[15rem]">
			{/* // eslint-disable-next-line @next/next/no-img-element */}
			<li>
				<img src={img} alt={title} className="w-full h-auto" />
				<div className="pt-2 file:tracking-wide">
					<h1 className="">{title}</h1>
					<h2 className="text-zinc-600 text-sm">{workType}</h2>
				</div>
			</li>
		</Card>
	)
}

export default LatestWorkItem
