import React from 'react'

import Body from '@/components/layout/body/Body'
import Feature from '@/components/layout/body/feature/Feature'
import AcademicSummary from './AcademicSummary'
import Headline from '@/components/layout/body/headline/Headline'

const Academics = () => {
	return (
		<Body>
			<Headline
				headlineTitle="A showcase of passion & interest"
				description="Discover my academic achievements and see how I turned my passion into a reality. Understand how my interests have guided my educational journey and how they can be an asset to your organization."
			/>
			<Feature
				img="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
				title="3.94 Cumulative GPA"
				description="As a Presidential Scholar awardee, I am proud to have achieved a 3.94 GPA while studying computer science at the New York Institute of Technology. My academic performance is a reflection of my dedication to my studies and my ability to excel in a challenging academic environment. In addition to my coursework, I have also pursued extracurricular interests in machine learning and research, further demonstrating my commitment to my field and my desire to stay current with the latest advancements in technology. I believe that my achievements can bring value to an organization looking for a highly motivated and skilled computer science professional."
				featureType="Grades"
			/>
			<AcademicSummary />
		</Body>
	)
}

export default Academics
