class WorkCardClass {
	img: string
	title: string
	workCompany: string
	position: string

	constructor(
		img: string,
		title: string,
		workCompany: string,
		position: string
	) {
		this.img = img
		this.title = title
		this.workCompany = workCompany
		this.position = position
	}
}

export default WorkCardClass
