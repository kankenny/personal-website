import SectionContainer from '@/components/ui/SectionContainer'
import React from 'react'

type Props = {
	img: string
	title: string
	description: string
	featureType: string
}

const Feature = ({ img, title, description, featureType }: Props) => {
	return (
		<SectionContainer twClasses="p-20 flex flex-col group">
			<img
				src={img}
				alt={title}
				className="bg-blue-500 mx-auto w-full h-auto border border-zinc-700 rounded-lg shadow-md duration-200 cursor-pointer"
			/>
			<div className="p-4 flex flex-col gap-4 cursor-pointer ">
				<div>
					<h1 className="text-3xl font-bold capitalize text-purple-500">
						{title}
					</h1>
					<h2 className="text-zinc-500 text-sm">
						{featureType}
					</h2>
				</div>
				<div className="flex justify-between">
					<p className="max-w-[75%] text-sm">{description}</p>
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 24 24"
						height="4em"
						width="4em"
						className="opacity-0 group-hover:opacity-100 duration-200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<polyline
							fill="none"
							strokeWidth="2"
							points="7 2 17 12 7 22"
						></polyline>
					</svg>
				</div>
			</div>
		</SectionContainer>
	)
}

export default Feature
