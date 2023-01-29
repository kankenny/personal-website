import AcademicSummary from '@/components/routes/academics/AcademicSummary'
import React from 'react'

type Props = {
	title: string
	children: React.ReactNode
}

const Detail = ({ title, children }: Props) => {
	return (
		<div className="flex flex-col gap-10">
			<h1 className="text-center text-5xl font-bold pt-16 tracking-wider">
				{title}
			</h1>
			{children}
			<AcademicSummary></AcademicSummary>
		</div>
	)
}

export default Detail
