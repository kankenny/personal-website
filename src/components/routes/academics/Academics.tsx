import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Body from '@/components/layout/body/Body'
import Feature from '@/components/layout/body/feature/Feature'
import AcademicSummary from './AcademicSummary'
import Headline from '@/components/layout/body/headline/Headline'
import Breadcrumbs from '@/components/layout/body/breadcrumbs/Breadcrumbs'

import CumulativeGPA from '../../../public/academics/cumulative-gpa/CumulativeGPA.png'
import AcademicsImg from '../../../public/Academics.png'

const Academics = () => {
	const router = useRouter()
	const pathName = router.pathname

	return (
		<Body>
			<Breadcrumbs fullPath={pathName} />
			<Headline
				headlineTitle="A showcase of passion & interest"
				description="Discover my academic achievements and see how I turned my passion into a reality. Understand how my interests have guided my educational journey and how they can be an asset to your organization."
				img={AcademicsImg}
			/>
			<Link href={`academics/3.94-cumulative-gpa`} legacyBehavior>
				<a href="">
					<Feature
						img={CumulativeGPA}
						title="3.94 Cumulative GPA"
						description="As a Presidential Scholar awardee, I am proud to have achieved a 3.94 GPA while studying computer science at the New York Institute of Technology. My academic performance is a reflection of my dedication to my studies and my ability to excel in a challenging academic environment. In addition to my coursework, I have also pursued extracurricular interests in machine learning and research, further demonstrating my commitment to my field and my desire to stay current with the latest advancements in technology. I believe that my achievements can bring value to an organization looking for a highly motivated and skilled computer science professional."
						featureType="Grades"
					/>
				</a>
			</Link>
			<AcademicSummary excludeTitle="3.94 Cumulative GPA" />
		</Body>
	)
}

export default Academics
