import React from 'react'
import BodyContainer from './BodyContainer'

type Props = {
	children: React.ReactNode
}

const Body = ({ children }: Props) => {
	return (
		<div className="h-full">
			<BodyContainer>{children}</BodyContainer>
		</div>
	)
}

export default Body
