/*C5 ★★ do...while. Print 5 4 3 2 1 Go! with a do...while loop. Then test both loops
below with the start value 0. How many times does each body run? Explain why.
let a = 0; do { console.log("do"); } while (a > 0);
let b = 0; while (b > 0) { console.log("while"); }*/

let count = 5;
let output = "";

do {
  output += count + " ";
  count--;
} while (count >= 1);

output += "Go!";
console.log(output); // 5 4 3 2 1 Go!