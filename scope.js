function fn () {
	let hoge = '関数内定義'
	console.log(hoge)
}
fn()

// console.log(hoge) // アクセス不可

let fuga = 'グローバル'

function fn2 () {
	fuga = '関数内からグローバル変数の書き換え'
}
fn2()

console.log(fuga)
