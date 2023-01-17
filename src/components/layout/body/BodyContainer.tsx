import React from 'react'

type Props = {
	children: React.ReactNode
}

const BodyContainer = ({ children }: Props) => {
	return (
		<div className="h-full flex flex-col justify-between mx-auto align-middle">
			{children}
		</div>
	)
}

export default BodyContainer
