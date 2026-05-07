// Solution 1

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);




// Solution 2

function reverseString(text: string): string {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
   reversed = reversed + text[i];
  }

  return reversed;
}

reverseString("typescript");
