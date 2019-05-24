var userToFind = prompt('Enter the name of the user')
var userList = ['Krantesh','Shivam','Rohit','Shivam','Ritesh']

for(i=0;i<=userList.length;i++){
	if (userList[i] == userToFind){
		alert("User found at position: "+(i+1))
		break
	}
	else{
		// Do Nothing
	}
}