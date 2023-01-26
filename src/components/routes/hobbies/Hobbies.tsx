import React from 'react'

import Body from '@/components/layout/body/Body'
import Connect from '@/components/layout/body/connect/Connect'
import Feature from '@/components/layout/body/feature/Feature'
import HobbySummary from './HobbySummary'
import Headline from '@/components/layout/body/headline/Headline'
import Link from 'next/link'

const Hobbies = () => {
	return (
		<Body>
			<Headline
				headlineTitle="What tickles my brain and gives me joy"
				description="Uncover my passions and find out what tickles my brain and gives me joy, by exploring my hobbies. See how my interests have helped me develop skills and knowledge that can be applied in my daily life."
			/>
			<Link href={`hobbies/factorio`} legacyBehavior>
				<a>
					<Feature
						img="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
						title="Factorio"
						description="I am an avid player of the game Factorio, and have a deep passion for the game's design and gameplay. The game's complexity and challenge are endlessly engaging for me, and I enjoy the satisfaction of optimizing my factory's efficiency through automation and solving bottlenecks in resources. I have applied my knowledge of software design concepts such as scalability in my gameplay, specifically in the form of building a main bus and utilizing robotics. Playing Factorio is not just a hobby for me, but a way to constantly improve my problem-solving, critical thinking, and ability to optimize and automate processes."
						featureType="Not a feature"
					/>
				</a>
			</Link>
			<HobbySummary />
			<Connect connectWithMeText="Let's connect to explore our passions together" />
		</Body>
	)
}

export default Hobbies
