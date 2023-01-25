import CardHighlightClass from '@/utils/data-models/CardHighlightClass'

const dummyImage = 'https://unsplash.com/photos/sf_1ZDA1YFw'

const highlightsList = [
	new CardHighlightClass(
		dummyImage,
		'Supplemental Instruction Leader',
		'Conducted biweekly sessions to 150+ students to teach Integral Calculus (MATH 180 - Calculus II)',
		'New York Institute of Technology',
		'Student Tutor'
	),
	new CardHighlightClass(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1024px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg',
		'StreetEasier',
		'A fullstack platform to search for apartments and match with roommates',
		'New York Institute of Technology',
		'BS CompSci Student'
	),
	new CardHighlightClass(
		dummyImage,
		'Undergraduate Research Assistant',
		'Applied machine learning models to predict the efficacy of bupropion in treatment of patients with MDD',
		'New York Institute of Technology',
		'BS CompSci Student'
	),
]

export default highlightsList
