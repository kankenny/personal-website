import SectionContainer from '@/components/ui/SectionContainer'
import React from 'react'

type Props = {
	img: string
	title: string
	description: string
	featureType: string
}

const Feature = ({ img, title, description, featureType }: Props) => {
	return (
		<SectionContainer twClasses="p-20">
			<div className="bg-red-500">Feature</div>
		</SectionContainer>
	)
}

export default Feature
