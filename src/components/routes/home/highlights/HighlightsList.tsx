import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Components
import OverviewCard from '@/components/ui/OverviewCard'

// Utility Functions
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

// Hard-coded Data
import highlightsList from '@/data/HIGHLIGHTS'

const listVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2 },
	},
}

const HighlightsList = () => {
	return (
		<motion.div
			className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto"
			variants={listVariant}
			initial="hidden"
			animate="visible"
			viewport={{ once: true, amount: 1 }}
		>
			{highlightsList.map((highlight) => (
				<Link
					key={highlight.title}
					href={`${highlight.workType}/${convertTextToUrl(
						highlight.title
					)}`}
					legacyBehavior
				>
					<a>
						<OverviewCard entry={highlight} />
					</a>
				</Link>
			))}
		</motion.div>
	)
}

export default HighlightsList
