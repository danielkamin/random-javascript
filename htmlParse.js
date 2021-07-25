const decimalToChar = (tablica=[]) =>{
  let result = ''
  tablica.forEach(ascii=>(
    result+=String.fromCharCode(ascii)
  ))
  return result
}
let numerNaKoszulceWPostaciHTML = "&#48;$#48;"
const regexp = /[#&$]/g
numerNaKoszulceWPostaciHTML = numerNaKoszulceWPostaciHTML.replace(regexp,'').replace(/;$/,'').split(';')
console.log(asciitonumber(numerNaKoszulceWPostaciHTML))

