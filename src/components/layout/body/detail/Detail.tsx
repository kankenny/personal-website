import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import AcademicSummary from '@/components/routes/academics/AcademicSummary'
import HobbySummary from '@/components/routes/hobbies/HobbySummary'
import ProjectsSummary from '@/components/routes/projects/ProjectsSummary'
import WorksSummary from '@/components/routes/work-experience/WorksSummary'

import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import LinkToSourceCode from './LinkToSourceCode'

type Props = {
	title: string
	children: React.ReactNode
	sourceCode?: string
}

const titleVariant = {
	hidden: {
		opacity: 0,
		y: -50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: 'easeInOut' },
	},
}

const Detail = ({ title, children, sourceCode }: Props) => {
	const router = useRouter()
	const pathName = router.pathname
	const parentPath = pathName.split('/')[1]

	return (
		<div className="flex flex-col gap-10">
			<Breadcrumbs fullPath={pathName} />
			<motion.div
				variants={titleVariant}
				initial="hidden"
				animate="visible"
				className="text-center text-4xl md:text-6xl font-bold py-16 tracking-wide"
			>
				<h1>{title}</h1>
			</motion.div>
			{children}
			{sourceCode && <LinkToSourceCode sourceCode={sourceCode} />}
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
