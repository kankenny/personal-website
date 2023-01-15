import React from 'react'

type Props = {
	twClasses?: string
	type: 'text' | 'password' | 'email' | 'number' | 'submit'
	maxLength?: number
	minLength?: number
}

type Ref = HTMLInputElement

const StyledInputRef = React.forwardRef<Ref, Props>((props, ref) => {
	const twClasses = { ...props }

	return <input ref={ref} className={`input ${twClasses}`} {...props} />
})

StyledInputRef.displayName = 'StyledInputRef'

export default StyledInputRef
