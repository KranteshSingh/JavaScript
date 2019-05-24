// Calculating the length of string
var myString = "If you are good at something never do it for free"
alert(myString)
var myStringLength = myString.length
alert('Length of String: '+ myStringLength)

// Finding the index of word 'never'
var indexInString = myString.indexOf("never")
alert('Index of Never :'+ indexInString)

// Extracting a sub part of String
var aSubString = myString.slice(10,20)
alert('Slicing Part is :'+aSubString)

// Replacing the string with another String
var anotherString = "This is a good pen"
var replacedString = anotherString.replace("good","bad")
alert('Replaced Sentence: '+replacedString)

// Changing the case of Sentence
var myString2 = "Nothing Lasts Forever"
alert('UpperCase: '+ myString2.toUpperCase())
alert('LowerCase: '+ myString2.toLowerCase())

//Megerging two Sentences together
var anotherSentence = "Also This Shall Too Pass"
var mergedString = myString2.concat(' '+anotherSentence)
alert(mergedString)