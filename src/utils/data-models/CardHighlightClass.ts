class CardHighlightClass {
	img: string
	title: string
	overview: string
	workCompany: string
	position: string

	constructor(
		img: string,
		title: string,
		overview: string,
		workCompany: string,
		position: string
	) {
		this.img = img
		this.title = title
		this.overview = overview
		this.workCompany = workCompany
		this.position = position
	}
}

export default CardHighlightClass
