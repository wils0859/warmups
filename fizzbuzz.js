for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 !== 0) {
    console.log(i + " " + "Fizz")
  }
  if(i % 3 !== 0 && i % 5 === 0) {
    console.log(i + " " + "Buzz")
  }
  if(i % 3 === 0 && i % 5 === 0) {
    console.log(i + " " + 'FizzBuzz')
  }
  if(i % 3 !== 0 && i % 5 !== 0) {
    console.log(i)
  }
}
