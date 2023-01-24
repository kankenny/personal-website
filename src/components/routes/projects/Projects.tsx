import React from 'react'

import Body from '@/components/layout/body/Body'
import Connect from '@/components/layout/body/connect/Connect'
import Headline from '@/components/layout/body/headline/Headline'
import Banner from '../home/banner/Banner'
import ProjectsSummary from './ProjectsSummary'
import Feature from '@/components/layout/body/feature/Feature'

const Projects = () => {
	return (
		<Body>
			<Banner />
			<Feature
				img="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
				title="test"
				description="
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam ullam rem vel exercitationem voluptas itaque unde laboriosam cum asperiores! 
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam ullam rem vel exercitationem voluptas itaque unde laboriosam cum asperiores! 
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam ullam rem vel exercitationem voluptas itaque unde laboriosam cum asperiores!"
				featureType="Not a feature"
			/>
			<Headline
				headlineTitle="Some Headline Title"
				headlineType="Some Type"
				date="10/29/00"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni, dignissimos explicabo odit iste, suscipit laborum eos veritatis aut ipsam soluta, alias sapiente! Numquam eaque laudantium ad molestias dicta aliquid"
			/>
			<Connect connectWithMeText="Interested in collaborating with me?" />
			<ProjectsSummary />
		</Body>
	)
}

export default Projects
