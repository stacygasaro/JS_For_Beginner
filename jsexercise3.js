/*C9 ★★★ Nested loops. Print this triangle using two loops (one for rows, one for stars):
*
**
***
****
******/

const rows = 5;

for (let row = 1; row <= rows; row++) {
  let line = "";
  for (let star = 1; star <= row; star++) {
    line += "*";
  }
  console.log(line);
}