const body = document.body

const h1 = document.createElement('h1') // bikin tag <h1></h1>
h1.textContent = '<marquee>Izul</marquee>' // di html terbaca -> "(<marquee>Izul</marquee>)"

const nama = document.createElement('p') // bikin tag <h1></h1>
nama.innerHTML = '<marquee>Zulkarnaen</marquee>' // di html terbaca -> <marquee>"Izul"</marquee>

const saya = document.createElement('b') // bikin tag <h1></h1>
saya.innerText = '<marquee>Ramdhani</marquee>' // di html terbaca -> "(<marquee>Izul</marquee>)"

body.append(h1) // memasukkan ke tag <body>
body.append(nama)
body.append(saya)


const wk = ['a','b','c']

const kw = new Array('A','B','C')

const uy = []
uy[0] = 'ba'
uy[1] = 'ca'
uy[2] = 'mu'

const check1 = kw.includes('A') // return true
const check2 = kw.includes('D') // return false

const posisi = kw.indexOf('B') // return 1 (index)
const indexBefore = posisi - 1 // 0
const indexAfter = posisi + 1 // 2
const Before = kw[indexBefore] // return 'A'
const After = kw[indexAfter] // return 'B'

const arrayAwal = ['1','2','3','4','5']
const arrayCopy = arrayAwal
arrayCopy[0] = '10'

const arrayAwal2 = ['1','2','3','4','5']
const arrayCopy2 = [...arrayAwal2] // || arrayAwal2.slice() || Array.from(arrayAwal2)
arrayCopy2[0] = '10'

const mergeArray = wk.concat(kw) // gabungin 2 array jadi array baru
// function
mergeArray.map((value, index) => console.log(value,index)) 
mergeArray.sort((a,b) => a.var - b.var)
mergeArray.filter((x) => x>30)
// ke 3 nya biasanya di combo bisa

// #function 
// Cara 1
const sum1 = new Function('x','y','console.log(x+y)')

// Cara 2
function sum2(x,y){
    console.log(x+y)
}

// Cara 3
const sum3 = (x,y) => {
    console.log(x+y)
}

sum1(1,2)
sum2(2,3)
sum3(3,4)
