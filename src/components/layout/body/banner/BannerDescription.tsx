import React from 'react'

const BannerDescription = () => {
	return (
		<div className="w-full text-zinc-900 text-lg md:text-3xl space-y-10 text-center p-10 md:pr-0 md:mx-auto md:text-right">
			<h1 className="">
				Hi there! My name is{' '}
				<p className="group-hover:scale-105 group-hover:underline decoration-zinc-100 group-hover:text-purple-700 group-hover:decoration-purple-700 group-hover:italic group-hover:font-bold duration-300 ">
					Kennette James Basco
				</p>
			</h1>
			<h2>
				My enjoyment comes from developing{' '}
				<p className="group-hover:scale-105 group-hover:underline decoration-zinc-100 group-hover:text-yellow-500 group-hover:decoration-yellow-500 group-hover:italic group-hover:font-bold duration-300 ">
					dynamic and interactive websites.
				</p>{' '}
				I aim to be a
				<br />{' '}
				<p className="group-hover:scale-105 group-hover:underline decoration-zinc-100 group-hover:text-purple-700 group-hover:decoration-purple-700 group-hover:italic group-hover:font-bold duration-300 ">
					Fullstack Software Engineer
				</p>{' '}
				one day.
			</h2>
		</div>
	)
}

export default BannerDescription
