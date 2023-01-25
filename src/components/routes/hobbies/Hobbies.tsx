import React from 'react'

import Body from '@/components/layout/body/Body'
import Connect from '@/components/layout/body/connect/Connect'
import Feature from '@/components/layout/body/feature/Feature'
import HobbySummary from './HobbySummary'
import Headline from '@/components/layout/body/headline/Headline'

const Hobbies = () => {
	return (
		<Body>
			<Headline
				headlineTitle="Some Headline"
				date="Oct 01"
				description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam ullam rem vel exercitationem voluptas itaque unde laboriosam cum asperiores! "
				headlineType="someType"
			/>
			<Feature
				img="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
				title="test"
				description="
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam ullam rem vel exercitationem voluptas itaque unde laboriosam cum asperiores! 
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam ullam rem vel exercitationem voluptas itaque unde laboriosam cum asperiores! 
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam ullam rem vel exercitationem voluptas itaque unde laboriosam cum asperiores!"
				featureType="Not a feature"
			/>
			<HobbySummary />
			<Connect connectWithMeText="Let's connect to explore our passions together" />
		</Body>
	)
}

export default Hobbies
