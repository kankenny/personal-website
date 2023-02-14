import React, { Fragment, useState } from 'react'

import SectionContainer from '@/components/ui/SectionContainer'
import Modal from '@/components/ui/Modal'

type Props = {
	connectWithMeText: string
}

const Connect = ({ connectWithMeText }: Props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const modalVisibilityHandler = () => {
		setModalIsOpen((prevState) => !prevState)
	}

	return (
		<Fragment>
			{modalIsOpen && <Modal onClose={modalVisibilityHandler} />}
			<SectionContainer twClasses="bg-black pb-0">
				<div
					className="flex flex-col gap-2 py-5 my-24 hover:text-main group border-y-2 hover:border-main cursor-pointer text-yellow-300 duration-200 border-yellow-300"
					onClick={modalVisibilityHandler}
				>
					<h1 className="text-4xl font-bold">
						{connectWithMeText}
					</h1>
					<div className="flex items-center">
						<p className="max-w-[75%] text-lg group-hover:underline font-light">
							Let&apos;s get in touch
						</p>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 24 24"
							height="2.3em"
							width="2.3em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<polyline
								fill="none"
								strokeWidth="2"
								points="7 2 17 12 7 22"
							></polyline>
						</svg>
					</div>
				</div>
			</SectionContainer>
		</Fragment>
	)
}

export default Connect
