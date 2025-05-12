function stringChop(str, size) {
  if (!str || size <= 0) return [];

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;


}
console.log(stringChop("Hello, world!", 5));
console.log(stringChop("12345",2));
console.log(stringChop("abc",5));

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
