
/* using javascript make the pattern based on given input:
SAMPLE INPUT:
*
* *
* * *
* * * *
* * * * *
*/

for (let i = 1; i <= 5; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }

  console.log(pattern);
}
