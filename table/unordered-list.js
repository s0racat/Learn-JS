const array = [
	"Apple",
	"Grape",
	"Orange"
]
// console.log(array[0])
// const table = document.createElement('table')
// const tr = table.appendChild(document.createElement('tr'))
// // li = document.createElement('li')
// // li.textContent = 'hoge'
// // ul.appendChild(li)
//
// array.map((x) => {
// 	th = document.createElement('th')
// 	th.textContent = '果物'
// 	td = document.createElement('td')
// 	td.textContent = x
// 	tr.appendChild(th)
// 	tr.appendChild(td)
// })
//
// document.addEventListener('DOMContentLoaded', () => {
// 	document.body.appendChild(tr)
// })
// テーブル要素を作成
var table = document.createElement('table');

// テーブルのヘッダ行を作成
var headerRow = document.createElement('tr');
var headerCell1 = document.createElement('th');
headerCell1.textContent = '果物';

// ヘッダ行をテーブルに追加
headerRow.appendChild(headerCell1);

// テーブルにヘッダ行を追加
table.appendChild(headerRow);

// テーブルのデータ行を作成
// var dataCell1_1 = document.createElement('td');
// dataCell1_1.textContent = 'データ1-1';
// var dataCell1_2 = document.createElement('td');
// dataCell1_2.textContent = 'データ1-2';
// dataRow1.appendChild(dataCell1_1);
// dataRow1.appendChild(dataCell1_2);
array.map((x) => {
var dataRow1 = document.createElement('tr');
	td = document.createElement('td')
	td.textContent = x
	dataRow1.appendChild(td)
table.appendChild(dataRow1);
})


// データ行をテーブルに追加

// テーブルをドキュメントに追加
window.onload = function() { document.body.appendChild(table); }
