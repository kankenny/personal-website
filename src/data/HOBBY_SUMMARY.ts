import CardHighlightClass from '@/utils/data-models/CardHighlightClass'

const dummyImage = 'https://unsplash.com/photos/sf_1ZDA1YFw'

export const hobbySummary = [
	new CardHighlightClass(
		dummyImage,
		'Chess',
		'Bullet - 1038 (Peaked at 1110), Rapid - 1113 (Peaked at 1132)',
		'Chess.com',
		'Chess Enthusiast'
	),
	new CardHighlightClass(
		dummyImage,
		'Left 4 Dead 2',
		'Slayed some zombies. Need I say more?',
		'Zombie land',
		'Survivor'
	),
	new CardHighlightClass(
		dummyImage,
		'Risk of Rain 2',
		'Fought aliens, collected loot, and managed synergies',
		'Alien planet',
		'Survivor'
	),
]

export default hobbySummary
