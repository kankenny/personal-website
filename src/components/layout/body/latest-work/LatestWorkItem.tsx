import React from 'react'

import Card from '@/components/ui/Card'

type Props = {
	img: string
	title: string
	workType: string
}

const LatestWorkItem = ({ img, title, workType }: Props) => {
	return (
		<Card twClasses="w-52 duration-200 hover:scale-105">
			<li>
				{/* // eslint-disable-next-line @next/next/no-img-element */}
				<div className="">
					<img
						src={img}
						alt={title}
						className="rounded-lg cursor-pointer"
					/>
				</div>
				<div className="pt-2 file:tracking-wide">
					<h1 className="">{title}</h1>
					<h2 className="text-zinc-600 text-sm">{workType}</h2>
				</div>
			</li>
		</Card>
	)
}

export default LatestWorkItem
