import React from 'react'
import { useRouter } from 'next/router'

import AcademicSummary from '@/components/routes/academics/AcademicSummary'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'

type Props = {
	title: string
	children: React.ReactNode
}

const Detail = ({ title, children }: Props) => {
	const router = useRouter()
	const pathName = router.pathname

	return (
		<div className="flex flex-col gap-10">
			<Breadcrumbs fullPath={pathName} />
			<h1 className="text-center text-5xl font-bold pt-16 tracking-wider">
				{title}
			</h1>
			{children}
			<AcademicSummary></AcademicSummary>
		</div>
	)
}

export default Detail
