import CardHighlightClass from '@/utils/data-models/CardHighlightClass'

const dummyImage = 'https://unsplash.com/photos/sf_1ZDA1YFw'

const projectSummary = [
	new CardHighlightClass(
		dummyImage,
		'Morse Code Decoder',
		'Used a binary search tree to simulate a binary decision to decode morse code into text',
		'New York Institute of Technology',
		'BS CompSci Student'
	),
	new CardHighlightClass(
		dummyImage,
		'Etch-a-Sketch',
		'Practiced DOM manipulation to trigger the hover event for grid items to draw on a canvas',
		'The Odin Project',
		'Learner'
	),
	new CardHighlightClass(
		dummyImage,
		'Weather Application',
		'Applied asynchronous JavaScript to allow queries for weather details on locations',
		'The Odin Project',
		'Learner'
	),
]

export default projectSummary
