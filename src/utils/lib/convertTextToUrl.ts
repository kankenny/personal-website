const convertTextToUrl = (text: string) => {
	const lowerCaseText = text.toLowerCase()
	const wordArr = lowerCaseText.split(' ')
	const wordArrWithoutHyphen = wordArr.filter((w) => w !== '-')
	const hyphenatedText = wordArrWithoutHyphen.join('-')
	return hyphenatedText
}

export default convertTextToUrl
