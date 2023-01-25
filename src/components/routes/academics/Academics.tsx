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
				description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam ullam rem vel exercitationem voluptas itaque unde laboriosam cum asperiores! "
			/>
			<Feature
				img="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
				title="3.94 Cumulative GPA"
				description="
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam ullam rem vel exercitationem voluptas itaque unde laboriosam cum asperiores! 
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam ullam rem vel exercitationem voluptas itaque unde laboriosam cum asperiores! 
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam ullam rem vel exercitationem voluptas itaque unde laboriosam cum asperiores!"
				featureType="Grades"
			/>
			<AcademicSummary />
		</Body>
	)
}

export default Academics
