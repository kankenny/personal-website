import React from 'react'

import SectionContainer from '@/components/ui/SectionContainer'
import AcademicSummary from '@/components/routes/academics/AcademicSummary'

type Props = {
	detail: { title: string; img: string; description: string }
	workType: string
}

const DetailSection = ({ detail, workType }: Props) => {
	return (
		<SectionContainer twClasses="flex flex-col shadow-none pb-0 border-none">
			<div className="gap-10 py-10 flex flex-col">
				<img
					src={
						'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
					}
					alt="Test"
					className="rounded-md"
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
