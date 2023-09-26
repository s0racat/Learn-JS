const list = [
	"Apple",
	"Grape",
	"Orange"
]
const ul = document.createElement('ul')
// li = document.createElement('li')
// li.textContent = 'hoge'
// ul.appendChild(li)

list.map((x) => {
	li = document.createElement('li')
	li.textContent = x
	ul.appendChild(li)
})

document.addEventListener('DOMContentLoaded', () => {
	document.body.appendChild(ul)
})
