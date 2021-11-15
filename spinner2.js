const spinner = ['|  ', '/  ', '-  ','\\  ', '|  ', '/  ', '-  ', '|  \n'];
const wait = 0
for (const symbol of spinner) {
  wait += 100;
  setTimeout(() => process.stdout.write(`\r${symbol}`), wait);
}






// const array = ['\r|  ', '\r/  ', '\r-  ','\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r|  \n'];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   const num = index + 1;
//   setTimeout(() => {
//     process.stdout.write(element);
//   }, 100 * num);
// }