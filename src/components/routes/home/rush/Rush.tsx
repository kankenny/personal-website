import SectionContainer from '@/components/ui/SectionContainer'
import React from 'react'

const Rush = () => {
	return (
		<SectionContainer twClasses="bg-black pb-0">
			<a
				href="https://fastupload.io/oiBDjq3F4f2F8ve/preview"
				target="_blank"
				rel="noreferrer noopener"
			>
				<div className="flex flex-col gap-2 py-5 my-24 hover:text-main group border-y-2 hover:border-main cursor-pointer text-yellow-300 duration-200 border-yellow-300">
					<h1 className="text-4xl font-bold">In a rush?</h1>
					<div className="flex items-center">
						<p className="max-w-[75%] text-lg group-hover:underline font-light">
							View my resume here
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
			</a>
		</SectionContainer>
	)
}

export default Rush
