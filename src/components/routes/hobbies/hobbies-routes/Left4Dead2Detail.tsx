import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/hobbies-data/left4Dead2Data'

const Left4Dead2Detail = () => {
	return (
		<Detail title="Left 4 Dead 2">
			{details.map((detail, index) => {
				return <DetailSection key={index} detail={detail} />
			})}
		</Detail>
	)
}

export default Left4Dead2Detail
