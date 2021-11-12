const array = ['\r|  ', '\r/  ', '\r-  ','\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r|  \n'];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  const num = index + 1;
  setTimeout(() => {
    process.stdout.write(element);
  }, 100 * num);
}
