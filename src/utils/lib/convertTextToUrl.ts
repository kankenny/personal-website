const convertTextToUrl = (text: string) => {
	const lowerCaseText = text.toLowerCase()
	const wordArr = lowerCaseText.split(' ')
	const hyphenatedText = wordArr.join('-')
	return hyphenatedText
}

export default convertTextToUrl
