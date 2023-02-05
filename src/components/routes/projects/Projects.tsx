import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Body from '@/components/layout/body/Body'
import Connect from '@/components/layout/body/connect/Connect'
import Headline from '@/components/layout/body/headline/Headline'
import ProjectsSummary from './ProjectsSummary'
import Feature from '@/components/layout/body/feature/Feature'
import Breadcrumbs from '@/components/layout/body/breadcrumbs/Breadcrumbs'
import SEO from '@/components/ui/SEO'

import StreetEasier from '../../../public/projects/streeteasier/StreetEasierLandingPage.png'
import ProjectsImg from '../../../public/Projects.png'

const Projects = () => {
	const router = useRouter()
	const pathName = router.pathname

	return (
		<Body>
			<SEO
				pageTitle="Kennette Basco - Projects"
				description="Kennette James Basco"
				content="Projects"
			/>
			<Breadcrumbs fullPath={pathName} />
			<Headline
				headlineTitle="A synergy of logic & creativity"
				description="Discover the synergy of logic and creativity in my web development projects. See how technical expertise and artistic vision come together to create innovative and effective solutions."
				img={ProjectsImg}
			/>
			<Link href={`projects/streeteasier`} legacyBehavior>
				<a>
					<Feature
						img={StreetEasier}
						title="StreetEasier"
						description="StreetEasier is a fullstack web platform that helps users to find and match with potential roommates for apartments, in an effort to alleviate the housing crisis. The platform allows users to search for available apartments, as well as create and manage their own listings. It also includes a matching system that connects potential roommates based on their preferences and requirements. The project was developed by a team of 5 people, with the goal of making the housing search process easier and more efficient for everyone involved."
						featureType="Fullstack web application"
					/>
				</a>
			</Link>
			<Connect connectWithMeText="Interested in collaborating with me?" />
			<ProjectsSummary excludeTitle="StreetEasier" />
		</Body>
	)
}

export default Projects
