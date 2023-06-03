function Sort_String()
{
	var string = document.getElementById('str').value;
	var res = string.split('').sort().join('');
	document.getElementById("result").innerHTML = res;
}