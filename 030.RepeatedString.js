// // // start
// // // input - var s, n
// // // loop 
// // // 'aba' make 10 times(aba aba aba a)
// // // every a count
// // // end

// // It is not working
// // function repeatedString(s, n) {
// //     var numberOfa = 0;
// //     var ValidNumber = 0
// //     if (100000000 >= n) {
// //         ValidNumber = n
// //     } else {
// //         numberOfa = n
// //     }
// //     var repeatString = s.repeat(n);
// // var splitArray = repeatString.split('');
// // for (var i = 0; i < ValidNumber; i++) {
// //     if (splitArray[i] === 'a') {
// //         numberOfa++;
// //     }
// // }
// //     console.log(numberOfa);
// // }

// // repeatedString('abcac', 10) // 4

// // It is working
// // q * numberOfa + r
// function repeatedString(s, n) {
//     var numberOfa = 0;
//     var dividedByN = n / s.length;
//     var round = Math.floor(dividedByN);
//     var modulusByN = n % s.length;
//     var modulus = 0;
//     for (var i = 0; i < modulusByN; i++) {
//         if (s.charAt(i) === 'a') {
//             modulus++;
//         }
//     }
//     for (var i = 0; i < s.length; i++) {
//         if (s.charAt(i) === 'a') {
//             numberOfa++;
//         }
//     }
//     var result = round * numberOfa + modulus;
//     console.log(result);
// }

// repeatedString('abwasasa', 10) // 5
// repeatedString('aba', 10) // 7
// repeatedString('abcac', 10) // 4
// // a b w a s a s a = 5
