let a = prompt('Digite um numero!')
let b = prompt('Digite outro numero!')

let c = parseFloat(a) + parseFloat(b)
let d = a - b
let e = a * b
let f = a / b
let g = a % b

let h = null

if(c%2 == 0){h = 'par'} else {h= 'impar'}

if(a == b){alert('os numeros são iguais')}

alert(`A soma dos dois números: ${c}`)
alert(`A soma dos dois numeros é ${h}`)
alert(`A subtração dos dois números: ${d}`)
alert(`A multiplicação dos dois números: ${e}`)
alert(`A divisão dos dois números: ${f}`)
alert(`O resto dos dois números: ${g}`)