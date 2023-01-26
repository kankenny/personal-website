import React from 'react'

import Body from '@/components/layout/body/Body'
import Connect from '@/components/layout/body/connect/Connect'
import Headline from '@/components/layout/body/headline/Headline'
import ProjectsSummary from './ProjectsSummary'
import Feature from '@/components/layout/body/feature/Feature'

const Projects = () => {
	return (
		<Body>
			<Headline
				headlineTitle="A synergy of logic & creativity"
				description="Discover the synergy of logic and creativity in my web development projects. See how technical expertise and artistic vision come together to create innovative and effective solutions."
			/>
			<Feature
				img="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
				title="StreetEasier"
				description="StreetEasier is a fullstack web platform that helps users to find and match with potential roommates for apartments, in an effort to alleviate the housing crisis. The platform allows users to search for available apartments, as well as create and manage their own listings. It also includes a matching system that connects potential roommates based on their preferences and requirements. The project was developed by a team of 5 people, with the goal of making the housing search process easier and more efficient for everyone involved."
				featureType="Fullstack web application"
			/>
			<Connect connectWithMeText="Interested in collaborating with me?" />
			<ProjectsSummary />
		</Body>
	)
}

export default Projects
