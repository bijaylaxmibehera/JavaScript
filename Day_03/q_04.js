//Given length of a regular hexagon, your function should return area of the hexagon. Example: Input: areaOfHexagon(10) ––> Output: 259.80

var len = 10;
function areaOfHexagon(a) {
  return (3 * Math.sqrt(3) * a * a / 2).toFixed(2)
}
console.log(areaOfHexagon(len));