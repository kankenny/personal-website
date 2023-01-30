import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/academics-data/cumulativeGPAData'

const CumulativeGPADetail = () => {
	return (
		<Detail title="3.94 Cumulative GPA">
			{details.map((detail, index) => {
				return <DetailSection key={index} detail={detail} />
			})}
		</Detail>
	)
}

export default CumulativeGPADetail
