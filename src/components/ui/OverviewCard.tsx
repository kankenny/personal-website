// Layout component for features listed in the child directory of the root page

import CardHighlightClass from '@/utils/data-models/CardHighlightClass'
import React from 'react'

import Card from './Card'

type Props = {
	entry: CardHighlightClass
}

const OverviewCard = ({ entry }: Props) => {
	return (
		<Card twClasses="rounded-xl bg-white p-2 hover:shadow-xl hover:transform hover:scale-105 duration-300 group cursor-pointer min-h-[28em]">
			<div className="flex items-end overflow-hidden rounded-xl">
				<img
					src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
					alt="Hotel Photo"
				/>
				{/* <img src={entry.img} /> */}
			</div>

			<div className="mt-1 p-2">
				<div className="pb-2">
					<h2 className="text-xl font-bold text-purple-500 pb-3 border-b-slate-400 border-b">
						{entry.title}
					</h2>
					<div className="mt-1 text-sm pt-3 text-slate-400 flex justify-between">
						<p className="pr-4">{entry.overview}</p>
						<p>{'Apr 202'}</p>
					</div>
				</div>

				<div className="gap-2 flex justify-between items-center text-purple-500 text-sm">
					{entry.position && entry.workCompany && (
						<div>
							<span>{entry.position}</span>
							<span className="text-slate-400 pl-1">
								{`@${entry.workCompany}`}
							</span>
						</div>
					)}

					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 24 24"
						height="3em"
						width="3em"
						className=" opacity-0 group-hover:opacity-100 duration-200"
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
		</Card>
	)
}

export default OverviewCard

// import React from 'react'

// import Card from './Card'

// type Ref = HTMLAnchorElement

// type Props = {
// 	img: string
// 	title: string
// 	overview: string
// 	workCompany: string
// 	position: string
// }

// const OverviewCard = React.forwardRef<Ref, Props>(
// 	({ img, title, overview, workCompany, position }, ref) => {
// 		return (
// 			<a ref={ref}>
// 				<Card twClasses="rounded-xl bg-white p-3 hover:shadow-xl hover:transform hover:scale-105 duration-300 group cursor-pointer">
// 					<div className="relative flex items-end overflow-hidden rounded-xl">
// 						<img
// 							src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
// 							alt="Hotel Photo"
// 						/>
// 						{/* <img src={img} /> */}
// 					</div>
// 					<div className="mt-1 p-2">
// 						<h2 className="text-slate-700">{title}</h2>
// 						<p className="mt-1 text-sm text-slate-400">
// 							{overview}
// 						</p>
// 						<div className="mt-3 gap-2 flex items-end justify-between text-purple-500">
// 							<di className="w-3/4">
// 								<span className="text-md font-bold ">
// 									{position}
// 								</span>
// 								<span className="text-xs text-slate-400">
// 									{`  @ ${workCompany}`}
// 								</span>
// 							</di>
// 							<svg
// 								stroke="currentColor"
// 								fill="currentColor"
// 								strokeWidth="0"
// 								viewBox="0 0 24 24"
// 								height="2.5em"
// 								width="2.5em"
// 								className=" opacity-0 group-hover:opacity-100 duration-200"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<polyline
// 									fill="none"
// 									strokeWidth="2"
// 									points="7 2 17 12 7 22"
// 								></polyline>
// 							</svg>
// 						</div>
// 					</div>
// 				</Card>
// 			</a>
// 		)
// 	}
// )

// OverviewCard.displayName = 'OverviewCard'
// export default OverviewCard
