import React from 'react'

const BannerDescription = () => {
	return (
		<div className="w-full text-zinc-100 text-lg  md:text-3xl space-y-10 text-center p-10 md:pr-0 md:mx-auto md:text-right my-auto ">
			<div>
				<h1 className="">Hi there! My name is</h1>
				<p className="text-purple-500 group-hover:underline decoration-zinc-100 group-hover:text-purple-500 group-hover:decoration-purple-500  font-bold duration-300">
					Kennette James Basco
				</p>
			</div>
			<div>
				<span>My enjoyment comes from developing</span>
				<p className="group-hover:underline decoration-zinc-100 group-hover:text-yellow-500 group-hover:decoration-yellow-300   duration-300 ">
					dynamic and interactive websites.
				</p>
				<span>I aim to be a</span>
				<p className="group-hover:underline decoration-zinc-100 group-hover:text-purple-500 group-hover:decoration-purple-500   duration-300">
					Fullstack Software Engineer
				</p>
				<span>one day.</span>
			</div>
		</div>
	)
}

export default BannerDescription
