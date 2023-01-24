// Layout component for features listed in the child directory of the root page

import React from 'react'

import Card from './Card'

type Props = {
	img: string
	title: string
	overview: string
	workCompany: string
	position: string
}

const OverviewCard = ({
	img,
	title,
	overview,
	workCompany,
	position,
}: Props) => {
	return (
		<Card twClasses="rounded-xl bg-white p-3 hover:shadow-xl hover:transform hover:scale-105 duration-300 group cursor-pointer">
			<div className="relative flex items-end overflow-hidden rounded-xl">
				<img
					src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
					alt="Hotel Photo"
				/>
				{/* <img src={img} /> */}
			</div>

			<div className="mt-1 p-2">
				<h2 className="text-slate-700">{title}</h2>
				<p className="mt-1 text-sm text-slate-400">{overview}</p>

				<div className="mt-3 gap-2 flex items-end justify-between text-purple-500">
					<p>
						<span className="text-md font-bold ">
							{position}
						</span>
						<span className="text-xs text-slate-400">
							{`  @ ${workCompany}`}
						</span>
					</p>

					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 24 24"
						height="2.5em"
						width="2.5em"
						className=" opacity-0 group-hover:opacity-100 duration-200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<polyline
							fill="none"
							stroke="#000"
							strokeWidth="2"
							points="7 2 17 12 7 22"
						></polyline>
					</svg>
				</div>
			</div>
		</Card>
	)
}

export default OverviewCard
