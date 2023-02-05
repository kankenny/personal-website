import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Components
import OverviewCard from '@/components/ui/OverviewCard'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'

// Utility Functions
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

// Hard-coded Data
import hobbySummary from '@/data/HOBBY_SUMMARY'

type Props = {
	excludeTitle?: string
}

const sectionContainerVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.3,
		},
	},
}

const HobbySummary = ({ excludeTitle }: Props) => {
	let filtered: any[] = []

	if (excludeTitle) {
		filtered = hobbySummary.filter(
			(hobby) => hobby.title !== excludeTitle
		)
	} else {
		filtered = hobbySummary
	}

	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="See other passions" />
			<motion.div
				className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
				variants={sectionContainerVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
			>
				{filtered.map((hobby) => (
					<Link
						legacyBehavior
						href={`/hobbies/${convertTextToUrl(hobby.title)}`}
						key={hobby.title}
					>
						<a>
							<OverviewCard entry={hobby} />
						</a>
					</Link>
				))}
			</motion.div>
		</SectionContainer>
	)
}

export default HobbySummary
