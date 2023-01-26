import CardHighlightClass from '@/utils/data-models/CardHighlightClass'

const dummyImage = 'https://unsplash.com/photos/sf_1ZDA1YFw'

export const workSummary = [
	new CardHighlightClass(
		dummyImage,
		'Undergraduate Research Assistant - Machine Learning',
		'Applied machine learning models to predict the efficacy of bupropion in treatment of patients with MDD',
		'New York Institute of Technology',
		'BS CompSci Student'
	),
	new CardHighlightClass(
		dummyImage,
		'Undergraduate Research Assistant - Physics',
		'Used python to experiment with neutrino data to better understand their quantitative properties',
		'New York Institute of Technology',
		'BS CompSci Student'
	),
]

export default workSummary
