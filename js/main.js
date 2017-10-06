var fruits = [ "apple", "pineapple", "papaya", "mango", "watermelon"];
console.log(fruits.length)
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i].length)
  if (fruits[i].length >= 4){
    console.log(fruits[i])
  }
}

fruits.reverse()
console.log(fruits)

var numberArray = [23, 12, 44, 55, 66];
numberArray.sort(function(a,b){
  console.log(a,b);
  return a - b;
});
console.log(numberArray);

var stringArray2 = ["ie","gc","mozzilla",];
stringArray2.push("netscape", "tor");
// stringArray2.shift();
// stringArray2.pop();
console.log(stringArray2);
