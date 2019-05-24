var evenNumbers = ['2','4','6','8']
alert(evenNumbers)
// push method in array will add an element from last
evenNumbers.push('10')
alert(evenNumbers)

// pop method in array will remove an element from last
var vegetables = ['Carrot',"Potato",'Tomato']
vegetables.pop()
alert(vegetables)

// shift method in array will remove the first element in array
vegetables.shift()
alert(vegetables)

// unshift method in array will add specific element from beginning
vegetables.unshift("Ginger")
alert(vegetables)

// it will change the value at desired index
vegetables[2] = 'Lettuce'
alert(vegetables)

// it will delete a particular element from array
delete vegetables[1]
alert(vegetables)

// we can also concat two array together
var dinner = ['ice cream','paneer','chicken','naan']
var breakfast = ['sandwich','tea','idli','uttapam']
var food = dinner.concat(breakfast)
alert(food)