import React from 'react'

type Props = {
	twClasses?: string
	children: React.ReactNode
	onCardClick?: () => void
}

const Card = ({ twClasses, children, onCardClick }: Props) => {
	return (
		<div className={`card ${twClasses}`} onClick={onCardClick}>
			{children}
		</div>
	)
}

export default Card
