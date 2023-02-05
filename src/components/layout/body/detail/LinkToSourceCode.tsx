import React from 'react'

type Props = {
	sourceCode: string
}

const LinkToSourceCode = ({ sourceCode }: Props) => {
	return (
		<div className="mx-auto text-4xl text-main font-bold underline duration-200 hover:text-yellow-300 bg-yellow-300 hover:bg-main rounded-lg px-5 py-2 border-2 border-main my-4 hover:border-yellow-300">
			<a href={sourceCode} target="_blank" rel="noreferrer noopener">
				See the source code here
			</a>
		</div>
	)
}

export default LinkToSourceCode
