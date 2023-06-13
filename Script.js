alert("Hi, Ms. Alupay!!!")
alert("I love you !!!")
alert(": )")
flag=1
function mf2(){
	alert("kinikilig na ako!!!")
	alert("love youuuu!!!")
}
function mf1(){
    if (flag==1){
        document.getElementById("no").style.left="200px";
        document.getElementById("no").style.top="300px";
        flag=2
    }
    else if (flag==2){
        document.getElementById("no").style.left="250px";
        document.getElementById("no").style.top="350px";
        flag=3
    }
    else if (flag==3){
        document.getElementById("no").style.left="300px";
        document.getElementById("no").style.top="354px";
        flag=4
    }
    else if (flag==4){
        document.getElementById("no").style.left="320px";
        document.getElementById("no").style.top="350px";
        flag=5
    }
    else if (flag==5){
        document.getElementById("no").style.left="250px";
        document.getElementById("no").style.top="360px";
        flag=6
    }
    else if (flag==6){
        document.getElementById("no").style.left="180px";
        document.getElementById("no").style.top="350px";
        flag=1
    }
}