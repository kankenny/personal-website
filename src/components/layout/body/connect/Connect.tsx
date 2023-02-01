import SectionContainer from '@/components/ui/SectionContainer'
import React from 'react'

type Props = {
	connectWithMeText: string
}

const Connect = ({ connectWithMeText }: Props) => {
	return (
		<SectionContainer twClasses="bg-black pb-0">
			<div className="flex flex-col gap-2 py-5 my-16 text-main group border-y-2 border-main">
				<h1 className="text-3xl font-bold">{connectWithMeText}</h1>
				<div className="flex items-center cursor-pointer">
					<p className="max-w-[75%] text-lg group-hover:underline ">
						Let&apos;s get in touch
					</p>
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 24 24"
						height="2.3em"
						width="2.3em"
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

export default Connect
