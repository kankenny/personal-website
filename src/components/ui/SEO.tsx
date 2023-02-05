import React from 'react'
import Head from 'next/head'

type Props = {
	pageTitle: string
	description: string
	content: string
}

const SEO = ({ pageTitle, description, content }: Props) => {
	return (
		<Head>
			<meta name={description} content={content} />
			<meta property={pageTitle} content={content} />
			<title>{pageTitle}</title>
		</Head>
	)
}
export default SEO
