// Given three angles of a triangle, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example: Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

function typeOfTriangle (angle1, angle2, angle3) {
  var sumOfAngle = Number(angle1) + Number(angle2) + Number(angle3)
  if (sumOfAngle === 180) {
    if (angle1 === angle2 && angle2 === angle3) {
      console.log('equilateral triangle')
    } else if (angle1 === angle2 || angle1 === angle3 || angle2 === angle3) {
      console.log('isosceles triangle')
    } else {
      console.log('scalene triangle')
    }
  } else {
    console.log('Not a triangle')
  }
}

typeOfTriangle(30, 60, 90)
