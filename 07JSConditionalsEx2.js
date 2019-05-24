var istopper = false

var marksObtained = prompt('Enter the marks Obtained')

if (marksObtained == undefined || marksObtained == null || marksObtained==''){
	alert('Invalid Input')
}else if(marksObtained < 0 && marksObtained > 100){
alert("Input a number between 0 to 100")
}else{
	marksObtained=Number(marksObtained)
	var totalMarks = 100
	var percentageOfMarksObtained = (marksObtained/totalMarks)*100
	if(percentageOfMarksObtained>90){
		istopper = true
	}
	else{
		istopper = false
	}
alert(istopper)

}