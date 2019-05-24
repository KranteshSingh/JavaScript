//Converting String into Array

var myString = 'I am the one who Knocks'
var sentenceToArray = myString.split("")
alert(sentenceToArray)
alert(Array.isArray(sentenceToArray))

//Converting Numbers into String Data Type

var aBigNumber = 7275139737
var convertedIntoString = aBigNumber.toString()
alert(typeof(convertedIntoString))

// Converting String into Number Data Type

var someNumber = "8090703665"
var convertedIntoNumber = Number(someNumber)
alert(convertedIntoNumber)
alert(typeof(convertedIntoNumber))

// Converting Array Into String

var vegetables = ["Carrots","Potato","Tomato","CauliFlower"]
var convertedString = vegetables.toString()
alert(typeof(convertedString))
alert(convertedString)