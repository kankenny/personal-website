import React from 'react'

// Components
import Body from '@/components/layout/body/Body'
import WorksSummary from './WorksSummary'
import Connect from '@/components/layout/body/connect/Connect'
import Headline from '@/components/layout/body/headline/Headline'
import Feature from '@/components/layout/body/feature/Feature'
import Link from 'next/link'

const WorkExperience = () => {
	return (
		<Body>
			<Headline
				headlineTitle="expression of knowledge & determination"
				description="Explore my professional journey and witness the results of my dedication and hard work. Experience the embodiment of my skills and passion in my work experience and see how I can bring value to your organization."
			/>
			<Link
				href={`work-experience/supplemental-instruction-leader`}
				legacyBehavior
			>
				<a>
					<Feature
						img="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
						title="Supplemental Instruction Leader"
						description="I taught integral calculus to a large group of students (over 150) in biweekly sessions. The course covered various techniques of integration, including substitution, integration by parts, partial fractions, and trigonometric substitution. The students learned how to apply these techniques to solve problems related to concepts such as work, volume, and improper integrals. The course also included practice problems and exercises to help students develop their problem-solving skills and deepen their understanding of the material."
						featureType="Student Tutor"
					/>
				</a>
			</Link>
			<Connect connectWithMeText="Interested in utilizing my skills?" />
			<WorksSummary />
		</Body>
	)
}

export default WorkExperience
