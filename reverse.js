var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  return original.split('').reverse().join(''); // original spelling and not reverseList()
}

// OUTPUT
// node reverse.js hello 
// olleh