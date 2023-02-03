import React from 'react'

const BannerDescription = () => {
	return (
		<div className="w-full text-white text-2xl  md:text-4xl space-y-10 text-center p-10 md:pr-0 md:mx-auto md:text-left my-auto font-bold">
			<div className="bg-darkGray rounded-md max-w-max p-6">
				<div className="group-hover:underline decoration-white group-hover:text-yellow-300 group-hover:decoration-yellow-300  duration-300">
					<p>Hi there! My name is</p>
					<h1>Kennette James Basco</h1>
					<p>— Frontend Web Developer</p>
				</div>
			</div>
		</div>
	)
}

export default BannerDescription
