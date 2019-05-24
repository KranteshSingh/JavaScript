var singleUser = {
	"name": "Krantesh",
	"email": "krantesh@gmail.com",
	"phone": 7275139737
}

for (x in singleUser){
	alert(singleUser[x])
}


var customers = [
{
	'custId' : '123',
	'name' : 'Rahul'
},
{
	'custId' : '124',
	'name' : 'Satish'
}]

for (y in customers){
	alert(customers[y].custId)
	alert(customers[y].name)
}