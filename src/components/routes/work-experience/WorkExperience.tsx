import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Components
import Body from '@/components/layout/body/Body'
import WorksSummary from './WorksSummary'
import Connect from '@/components/layout/body/connect/Connect'
import Headline from '@/components/layout/body/headline/Headline'
import Feature from '@/components/layout/body/feature/Feature'
import Breadcrumbs from '@/components/layout/body/breadcrumbs/Breadcrumbs'

import SILeader from '../../../public/work-experience/supplemental-instruction-leader/SILeader.jpg'
import WorkExperienceImg from '../../../public/WorkExperience.png'

const WorkExperience = () => {
	const router = useRouter()
	const pathName = router.pathname

	return (
		<Body>
			<Breadcrumbs fullPath={pathName} />
			<Headline
				headlineTitle="expression of knowledge & determination"
				description="Explore my professional journey and witness the results of my dedication and hard work. Experience the embodiment of my skills and passion in my work experience and see how I can bring value to your organization."
				img={WorkExperienceImg}
			/>
			<Link
				href={`work-experience/supplemental-instruction-leader`}
				legacyBehavior
			>
				<a>
					<Feature
						img={SILeader}
						title="Supplemental Instruction Leader"
						description="I taught integral calculus to a large group of students (over 150) in biweekly sessions. The course covered various techniques of integration, including substitution, integration by parts, partial fractions, and trigonometric substitution. The students learned how to apply these techniques to solve problems related to concepts such as work, volume, and improper integrals. The course also included practice problems and exercises to help students develop their problem-solving skills and deepen their understanding of the material."
						featureType="Student Tutor"
					/>
				</a>
			</Link>
			<Connect connectWithMeText="Interested in utilizing my skills?" />
			<WorksSummary excludeTitle="Supplemental Instruction Leader" />
		</Body>
	)
}

export default WorkExperience
