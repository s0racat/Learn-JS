const array = [
	"Apple",
	"Grape",
	"Orange"
]
console.log(array[0])
const ul = document.createElement('ul')
// li = document.createElement('li')
// li.textContent = 'hoge'
// ul.appendChild(li)

array.forEach((x) => {
	li = document.createElement('li')
	li.textContent = x
	ul.appendChild(li)
})

document.addEventListener('DOMContentLoaded', () => {
	document.body.appendChild(ul)
})
