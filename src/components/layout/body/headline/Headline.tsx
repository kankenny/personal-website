import SectionContainer from '@/components/ui/SectionContainer'
import React from 'react'

type Props = {
	headlineTitle: string
	description: string
	img?: string
}

const Headline = ({ headlineTitle, description, img }: Props) => {
	return (
		<SectionContainer twClasses="pb-0 p-5 md:p-20">
			<div className="flex flex-col md:flex-row">
				<div className="flex flex-col flex-grow w-full md:w-[45%]">
					<h1 className="border-b border-gray-600 text-5xl capitalize pb-4">
						{headlineTitle}
					</h1>
					<p className="pt-4">{description}</p>
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
