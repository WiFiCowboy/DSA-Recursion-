// 1. Counting Sheep

// function countSheep(n) {
//   if (n === 0) {
//     return console.log("All sheeps jumped over the fence");
//   }
//   console.log(n + ":Another sheep jumped over the fence");
//   return countSheep(n - 1)
// }

// countSheep(3)

// 2. Power Calculator 

// function powerCalculator(base, exp) {
//   if (exp <= 0) {
//     return 'exp should be >=0'
//   }

//   // return Math.pow(base, exp)

//   if (exp === 1) {
//     return base
//   }

//   return base * powerCalculator(base, (exp - 1))
//   //explain -1
// }

// console.log(powerCalculator(10, 12));

// 3.Reverse String

// function reverseString(str) {
//   if (str === "") {
//     return "";
//   }



//   else
//     return reverseString(str.substr(1)) + str.charAt(0);
//   // const newStr = str[-1]

//   // return newStr + reverseString(str.slice(-1));

// }

// console.log(reverseString('redrum'));

// 4. nth Triangular Number

// function triangleNumber(n) {
//   if (n === 0) {
//     return 0;
//   }
//   return n + triangleNumber(n - 1);

// }

// console.log(triangleNumber(8));


//5. String Splitter
function strSpiltter(str, separator) {
  if (!str.includes(separator)) { return [str] }

  let sepInd = str.indexOf(separator);
  let split = str.slice(0, sepInd)


  return array;
  // base case ??
  // if (strArr === ["02", "20", "2020"])

  //strArr = strArr.push(str.split(index))


}

console.log(strSpiltter('02/02/2020', '/'));
