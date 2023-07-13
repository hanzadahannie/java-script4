
// function worldCheck(str){
//     str = str.trim()
//     str = str.slice(str.indexOf(' ')+1) + ' ' + str.slice(0,str.indexOf(' '))
//     str = str.slice(0,str.lastIndexOf('o'))+ 'a'
//     return str
// }
//
// console.log(worldCheck (' hello world'))

// function worldCheck(str){
//     if (str.length %2){
//         return 'even'
//     }else {
//         return 'odd'
//     }
// }
//
// console.log(worldCheck('hello world'))

// 1. lorem ipsum dolor sit amet => LoremIpsumDolorSitAmet



// function loremLow(str){
//     let string = ' ';
//     let word=str[0].toUpperCase()+str.slice(1,str.indexOf(' '))
//     string = string + word
//     str = str.slice(str.indexOf(' ')+1)
//
//     word = str[0].toUpperCase()+str.slice(1,str.indexOf(' '))
//     string = string + word
//     str = str.slice(str.indexOf(' ')+1)
//
//     word = str[0].toUpperCase()+str.slice(1,str.indexOf(' '))
//     string = string + word
//     str = str.slice(str.indexOf(' ')+1)
//
//     word = str[0].toUpperCase()+str.slice(1,str.indexOf(' '))
//     string = string + word
//     str = str.slice(str.indexOf(' ')+1)
//
//     word = str[0].toUpperCase()+str.slice(1,str.indexOf(' '))
//     string = string + word
//     return string
// }
//
// console.log(loremLow('lorem ipsum dolor sit amet'))

// price и discount

// function priceDiscount(price, discont){
//     price=price - (price*discont/100)
//     return price
// }
//
// console.log(priceDiscount(1000,20))

// str в задаче вам надо проверить что это строка.


// function strCheck(str){
//    if (typeof str ==="string"){
//     return 'string'
// }else{
//     return 'false'
// }
// }
// console.log(strCheck('jkl'))
//
// // вы проверяете не пустая ли она. длина мин 4 макс 10. четность длины.
//
// function userCheck(user){
//     if (user.length !==0){
//         if(user.length >=4 && user.length < 11){
//             if (user.length % 2){
//                 return 'even'
//             }else {
//                 return 'odd'
//             }
//         }else {
//             return 'must be min 4 max 10'
//         }
//     }else {
//         return 'empty'
//     }
// }
//
// console.log(userCheck('yes', ))