export const divideWithFive = (array) => {
  const resultArray = []
  for(var i = 0; i < array.length; i=i+5) {
    const newArray = []
    newArray.id = i
    for(var j = 0; j < 5; j++) {
      newArray[j] = array[i+j]
    }
    resultArray.push(newArray)
  }
  return resultArray
}
