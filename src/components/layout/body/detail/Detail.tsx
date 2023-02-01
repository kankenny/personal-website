import React from 'react'
import { useRouter } from 'next/router'

import AcademicSummary from '@/components/routes/academics/AcademicSummary'
import HobbySummary from '@/components/routes/hobbies/HobbySummary'
import ProjectsSummary from '@/components/routes/projects/ProjectsSummary'
import WorksSummary from '@/components/routes/work-experience/WorksSummary'

import Breadcrumbs from '../breadcrumbs/Breadcrumbs'

type Props = {
	title: string
	children: React.ReactNode
}

const Detail = ({ title, children }: Props) => {
	const router = useRouter()
	const pathName = router.pathname
	const parentPath = pathName.split('/')[1]

	return (
		<div className="flex flex-col gap-10">
			<Breadcrumbs fullPath={pathName} />
			<h1 className="text-center text-4xl md:text-6xl font-bold py-16 tracking-wide">
				{title}
			</h1>
			{children}
			{parentPath === 'academics' && (
				<AcademicSummary excludeTitle={title} />
			)}
			{parentPath === 'work-experience' && (
				<WorksSummary excludeTitle={title} />
			)}
			{parentPath === 'hobbies' && (
				<HobbySummary excludeTitle={title} />
			)}
			{parentPath === 'projects' && (
				<ProjectsSummary excludeTitle={title} />
			)}
		</div>
	)
}

export default Detail
