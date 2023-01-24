import SectionContainer from '@/components/ui/SectionContainer'
import React from 'react'

type Props = {
	headlineTitle: string
	headlineType: string
	date: string
	description: string
	img?: string
}

const Headline = ({
	headlineTitle,
	headlineType,
	date,
	description,
	img,
}: Props) => {
	return (
		<SectionContainer twClasses="pb-0 p-5 md:p-20">
			<div className="flex flex-col md:flex-row">
				<div className="flex flex-col flex-grow w-full md:w-[45%]">
					<h1 className="border-b border-gray-600 pb-2 text-5xl capitalize">
						{headlineTitle}
					</h1>
					<div className="flex justify-between text-gray-600 text-sm py-2">
						<p>{headlineType}</p>
						<p>{date}</p>
					</div>
					<p>{description}</p>
				</div>
				<div className="flex-grow w-full flex justify-center items-center">
					<div className="bg-white p-2">asdfaDFASD</div>
					{/* <img src={img} alt="" /> */}
				</div>
			</div>
		</SectionContainer>
	)
}

export default Headline
