import Terminal from '../../public/projects/morse-code-decoder/MorseCodeDecoderTerminal.png'
import OOP from '../../public/projects/morse-code-decoder/MorseCodeDecoderOOP.png'

const details = [
	{
		title: 'Binary Decision Tree Based Algorithm',
		img: Terminal,
		description:
			'The decision to use a binary search tree instead of a hashmap in this Morse code decoder project was based on several considerations. One advantage of binary search trees is that they allow for faster searching and sorting operations compared to hashmaps. Additionally, binary search trees offer better space utilization and can be more easily extended to handle complex operations. These benefits make binary search trees a more efficient choice for this project compared to hashmaps, allowing for optimized decoding of Morse code into the alphabet.',
	},
	{
		title: 'Object Oriented Programming',
		img: OOP,
		description:
			'This Morse code decoder was developed using an Object-Oriented Programming (OOP) approach, dividing the code into three portions: abstraction level, implementation level, and application level. The abstraction level defines the high-level structure and interfaces of the code, providing a clear and concise view of the overall system. The implementation level fills in the details, taking care of the low-level logic and algorithms required for the decoder to work. Finally, the application level brings everything together, using the abstractions and implementations to create a working Morse code decoder that can be used in real-world scenarios. This clear division of responsibilities allows for a clean, maintainable, and scalable codebase that meets the needs of the project.',
	},
]

export default details
