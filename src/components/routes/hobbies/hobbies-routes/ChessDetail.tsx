import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/hobbies-data/chessData'

const ChessDetail = () => {
	return (
		<Detail title="Chess">
			{details.map((detail, index) => {
				return (
					<DetailSection
						key={index}
						detail={detail}
						workType="projects"
					/>
				)
			})}
		</Detail>
	)
}

export default ChessDetail
