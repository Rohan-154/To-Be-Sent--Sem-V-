function Reverse_Num()
{
	var n = parseInt(document.getElementById('num').value);
	n = n + "";
	var res = n.split("").reverse().join("");
	document.getElementById("result").innerHTML = res;
}