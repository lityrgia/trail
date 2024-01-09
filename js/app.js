

document.addEventListener("mousemove", (e) => {

	let element = document.createElement("div")
	element.classList.add("effect")
	element.style.top = e.clientY + "px"
	element.style.left = e.clientX + "px"

	document.body.insertAdjacentElement("afterbegin", element)

	setTimeout(() => {
		element.remove()
	}, 700)

})