const favFood = ["Sushi", "Kraprao", "Shabu", "Salad"]
console.log(favFood.indexOf("Shabu"))
// favFood.push("Cake")
// favFood.push("Lychee")
// favFood.push("Cheese pie")
favFood.push("Cake", "Lychee", "Cheese pie")
console.log(favFood)
console.log(favFood.includes("Shabu"))

console.log(favFood.shift())
const newFavFood = favFood.sort()
console.log(newFavFood)