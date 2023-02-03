import SectionContainer from '@/components/ui/SectionContainer'
import React from 'react'
import BreadCrumbItem from './BreadCrumbItem'

type Props = {
	fullPath: string
}

const Breadcrumbs = ({ fullPath }: Props) => {
	const fullPathArray = fullPath.split('/')

	return (
		<SectionContainer twClasses="pt-4 shadow-none border-none pb-0">
			<div className="flex flex-row space-x-2 items-center border-b border-b-gray pb-4">
				{fullPathArray.map((path, index) => (
					<BreadCrumbItem
						path={path}
						key={path + index}
						isLast={index + 1 === fullPathArray.length}
					/>
				))}
			</div>
		</SectionContainer>
	)
}

export default Breadcrumbs
