import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/projects-data/morseCodeDecoderData'

const MorseCodeDecoderDetail = () => {
	return (
		<Detail title="Morse Code Decoder">
			{details.map((detail, index) => {
				return <DetailSection key={index} detail={detail} />
			})}
		</Detail>
	)
}

export default MorseCodeDecoderDetail
