import React from 'react'

// Components
import Body from '@/components/layout/body/Body'
import WorksSummary from './WorksSummary'
import Connect from '@/components/layout/body/connect/Connect'
import Headline from '@/components/layout/body/headline/Headline'
import Feature from '@/components/layout/body/feature/Feature'

const WorkExperience = () => {
	return (
		<Body>
			<Headline
				headlineTitle="expression of knowledge & determination"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni, dignissimos explicabo odit iste, suscipit laborum eos veritatis aut ipsam soluta, alias sapiente! Numquam eaque laudantium ad molestias dicta aliquid"
			/>
			<Feature
				img="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
				title="Supplemental Instruction Leader"
				description="Conducted biweekly sessions to 150+ students to teach Integral Calculus (MATH 180 - Calculus II)"
				featureType="Student Tutor"
			/>
			<Connect connectWithMeText="Interested in utilizing my skills?" />
			<WorksSummary />
		</Body>
	)
}

export default WorkExperience
