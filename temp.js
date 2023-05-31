//var fromtemp = document.getElementById("from").value
   // var totemp = document.getElementById("to").value
    //var oldtemp = document.getElementById("temp").value
    //var x = document.getElementById("result").innerHTML=
   // x.innerHTML = ""
//console.log(fromtemp)



function change(){
var fromtemp = document.getElementById("from").value
var totemp = document.getElementById("to").value
var oldtemp = document.getElementById("temp").value

 if(fromtemp == "celsius" && totemp == "fahrenheit"){
    var data1 = (oldtemp * 9) / 5 + 32;
   document.getElementById("result").value=data1
}
if(fromtemp == "celsius" && totemp == "kelvin"){
    var data2 = oldtemp + 273;
    document.getElementById("result").value=data2
}

if(fromtemp == "fahrenheit" && totemp == "celsius"){
    var data3 = ((oldtemp - 32)*5) / 9;
    document.getElementById("result").value=data3
}
if(fromtemp == "fahrenheit" && totemp == "kelvin"){
    var data4 = ((oldtemp - 32)*5) / 9 + 273 
    document.getElementById("result").value=data4
}
if(fromtemp == "kelvin" && totemp == "celsius"){
    var data5 = oldtemp - 273;
    document.getElementById("result").value=data5
}
if(fromtemp == "kelvin" && totemp == "fahrenheit"){
    var data6 = ((oldtemp -273)*9)/5 + 32;
    document.getElementById("result").value=data6
}
}