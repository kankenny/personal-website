import React from 'react'
import { motion } from 'framer-motion'

const pathVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		rotate: 360,
		scale: 1,
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
}

const Socials = () => {
	return (
		<div className="flex flex-col text-white space-y-10">
			<div className="text-center p-4 text-5xl space-y-10 mb-56">
				<h1 className="font-bold">
					Thanks for taking an interest in me!
				</h1>
			</div>
			<div className="text-center">
				<p className="text-2xl font-light">
					React out to me here:{' '}
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center h-full gap-16 p-2 mt-10">
					<a
						href="https://www.linkedin.com/in/kennette-basco/"
						target="_blank"
						rel="noreferrer noopener"
						className=" hover:text-gray-900 hover:text-yellow-500 hover:scale-110 duration-200"
					>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 1024 1024"
							height="4em"
							width="4em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<motion.path
								variants={pathVariants}
								initial="hidden"
								animate="visible"
								d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
							></motion.path>
						</svg>
					</a>
					<a
						href="https://github.com/Kankenny"
						target="_blank"
						rel="noreferrer noopener"
						className=" hover:text-gray-900 hover:text-yellow-500 hover:scale-110 duration-200"
					>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 1024 1024"
							height="4em"
							width="4em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<motion.path
								variants={pathVariants}
								initial="hidden"
								animate="visible"
								d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
							></motion.path>
						</svg>
					</a>
					<a
						href="https://leetcode.com/Kankenny/"
						target="_blank"
						rel="noreferrer noopener"
						className=" hover:text-gray-900 hover:text-yellow-500 hover:scale-110 duration-200"
					>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							role="img"
							viewBox="0 0 24 24"
							height="4em"
							width="4em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title></title>
							<motion.path
								variants={pathVariants}
								initial="hidden"
								animate="visible"
								d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"
							></motion.path>
						</svg>
					</a>
					<a
						href="https://www.facebook.com/kennette.maddela"
						target="_blank"
						rel="noreferrer noopener"
						className=" hover:text-gray-900 hover:text-yellow-500 hover:scale-110 duration-200"
					>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 1024 1024"
							height="4em"
							width="4em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<motion.path
								variants={pathVariants}
								initial="hidden"
								animate="visible"
								d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"
							></motion.path>
						</svg>
					</a>
					<a
						href="mailto:kmaddela@nyit.edu?Subject=Saw%20you%20on%20your%20website!"
						target="_blank"
						rel="noreferrer noopener"
						className=" hover:text-gray-900 hover:text-yellow-500 hover:scale-110 duration-200"
					>
						<svg
							stroke="currentColor"
							fill="none"
							strokeWidth="2"
							viewBox="0 0 24 24"
							strokeLinecap="round"
							strokeLinejoin="round"
							height="4em"
							width="4em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<motion.path
								variants={pathVariants}
								initial="hidden"
								animate="visible"
								d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							></motion.path>
							<motion.polyline
								variants={pathVariants}
								initial="hidden"
								animate="visible"
								points="22,6 12,13 2,6"
							></motion.polyline>
						</svg>
					</a>
				</div>
			</div>
			<div className="text-center p-2 text-5xl">
				<p className="text-2xl font-light">
					or see my portfolio here:
				</p>
			</div>
			<a
				href="https://fastupload.io/oiBDjq3F4f2F8ve/preview"
				target="_blank"
				rel="noreferrer noopener"
				className="flex space-x-2 justify-center items-center text-yellow-300 bg-slate-900 w-min mx-auto px-4 py-2 rounded-xl shadow-yellow-300 shadow-sm hover:scale-105 duration-100 hover:text-main hover:shadow-main"
			>
				<div className="flex space-x-2">
					<h1 className="underline italic tracking-wider text-md font-bold">
						Resume
					</h1>
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 16 16"
						height="1.5em"
						width="1.5em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M5 7.5a.5.5 0 01.707 0L8 9.793 10.293 7.5a.5.5 0 11.707.707l-2.646 2.647a.5.5 0 01-.708 0L5 8.207A.5.5 0 015 7.5z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M8 1a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 1z"
							clipRule="evenodd"
						></path>
					</svg>
				</div>
			</a>
		</div>
	)
}

export default Socials
