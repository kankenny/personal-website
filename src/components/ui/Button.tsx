import React from 'react'

type Props = {
	twClasses?: string
	buttonText: string
	onButtonClick?: () => void
}

const Button = ({ twClasses, buttonText, onButtonClick }: Props) => {
	return (
		<button className={`button ${twClasses}`} onClick={onButtonClick}>
			{buttonText}
		</button>
	)
}

export default Button
