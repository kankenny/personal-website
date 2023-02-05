import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Components
import OverviewCard from '@/components/ui/OverviewCard'

// Utility Functions
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

// Hard Coded Data
import latestWorkList from '@/data/LATEST_WORK'

const listVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2 },
	},
}

const LatestWorkList = () => {
	return (
		<motion.div
			className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
			variants={listVariant}
			initial="hidden"
			animate="visible"
			viewport={{ once: true, amount: 1 }}
		>
			{latestWorkList.map((latestWork) => (
				<Link
					key={latestWork.title}
					href={`${latestWork.workType}/${convertTextToUrl(
						latestWork.title
					)}`}
					legacyBehavior
				>
					<a>
						<OverviewCard entry={latestWork} />
					</a>
				</Link>
			))}
		</motion.div>
	)
}

export default LatestWorkList
