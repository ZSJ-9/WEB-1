str = "";
function getNum(which){
	str+=which.value;
	document.getElementById("result").innerHTML = str;
}
function clearData(){
	str="";
	document.getElementById("result").innerHTML = 0;
}
function calculate(){
	document.getElementById("result").innerHTML = '';
	var resultNum = eval(str);
	resultNum += '';
	if (resultNum.indexOf(".")>0)
	{
		var a = resultNum.indexOf(".");
		resultNum = resultNum.substring(0,a+3);
	}
	document.getElementById("result").innerHTML = resultNum;
	str = resultNum;
}
