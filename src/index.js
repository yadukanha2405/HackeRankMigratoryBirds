import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
function migratoryBirds(arr) {
  // Write your code here
  let maxNum = 0;
  let maxId = 0;
  let numArr = new Array(6).fill(0);
  for (let val of arr) {
    numArr[val]++;
    if (numArr[val] > maxNum) {
      maxNum = numArr[val];
      maxId = val;
    } else if (numArr[val] === maxNum && val < maxId) {
      maxId = val;
    }
  }
  return maxId;
}
let result = migratoryBirds([1, 4, 4, 4, 5, 3]);
console.log(result);
