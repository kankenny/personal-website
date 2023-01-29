import React from 'react'

import SectionContainer from '@/components/ui/SectionContainer'
import Image, { StaticImageData } from 'next/image'

type Props = {
	detail: {
		title: string
		img: StaticImageData | string
		description: string
	}
}

const DetailSection = ({ detail }: Props) => {
	return (
		<SectionContainer twClasses="flex flex-col shadow-none pb-0 border-none">
			<div className="gap-10 py-10 flex flex-col">
				<Image
					src={detail.img}
					alt={detail.title}
					className="w-full rounded-lg shadow-lg"
					quality="100"
				/>
				<div className="w-3/4 mx-auto space-y-10">
					<h1 className="text-2xl md:text-3xl font-bold mb-4">
						{detail.title}
					</h1>
					<p className="text-md leading-10 md:text-lg">
						{detail.description}
					</p>
				</div>
			</div>
		</SectionContainer>
	)
}

export default DetailSection
