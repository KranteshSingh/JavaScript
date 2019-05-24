var foodItem = {
	"itemType":"coffee",
	"itemName":"Expresso",
	"itemQuanity":"large",
	"cost":250,
	"isAvailable":true,
	"quantityAvailable":25
}

var itemName = foodItem.itemName;
alert(itemName)

var itemPrice = foodItem["cost"]
alert(itemPrice)


// object in js are declared inside curly braces and are in pairs of key & value.
// all pairs of key and value are written and separeted by comma.