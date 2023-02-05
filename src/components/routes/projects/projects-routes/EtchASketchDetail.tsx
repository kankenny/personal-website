import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/projects-data/etchASketchData'

const EtchASketchDetail = () => {
	return (
		<Detail
			title="Etch-a-Sketch"
			sourceCode="https://github.com/Kankenny/etch-a-sketch"
		>
			{details.map((detail, index) => {
				return <DetailSection key={index} detail={detail} />
			})}
		</Detail>
	)
}

export default EtchASketchDetail
