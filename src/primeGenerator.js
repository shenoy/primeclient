function primeGenerator(n) {

  let arr = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < parseInt(Math.sqrt(i) + 1); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) arr.push(i);
  }

  return arr;
}

export default primeGenerator;
