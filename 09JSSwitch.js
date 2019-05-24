var grade = prompt("What is your Grade:")
var result
switch(grade){
	case 'A':
	result = "You have excellent marks"
	break
	case 'B':
	result = "You have performed good"
	break
	case 'C':
	result = "You have just passed"
	break
	case 'D':
	result = "You have failed"
	break
	default:
	result = "This is not a Valid Input"
}
alert(result)