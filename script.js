//prettier
function compare(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
}
// przykładowy input:
const res1 = compare(2, 1);
const res2 = compare(1, 2);
const res3 = compare(1, 1);
console.log(res1 + res2 + res3);
