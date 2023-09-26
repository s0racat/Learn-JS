let hoge = 'test'

function fn(arg) {
	arg = '引数'
	console.log('関数内からアクセス', arg) // argとhogeは別物(コピー)
}
fn(hoge)

// console.log(arg) // スコープ外からアクセスできない https://www.cc.kyoto-su.ac.jp/~yamada/ap/parameter_argument.html

function fn2(arg){
	arg = '引数'
	return arg
}
hoge = fn2(hoge)

console.log('返り値で変数書き換え',hoge)
