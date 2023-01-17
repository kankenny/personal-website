import Card from '@/components/ui/Card'
import React from 'react'

type Props = {
	img: string
	title: string
	workCompany: string
	position: string
}

const WorkCard = ({ img, title, workCompany, position }: Props) => {
	return (
		<Card twClasses="min-w-[16rem] min-h-[14rem] duration-200 hover:scale-105 cursor-pointer ">
			<img src={img} alt={title} />
			<div className="p-2 file:tracking-wide pb-10">
				<h1 className="">{title}</h1>
				<h2 className="text-zinc-600 text-sm">{position}</h2>
				<h2 className="text-zinc-600 text-sm">@{workCompany}</h2>
			</div>
		</Card>
	)
}

export default WorkCard
