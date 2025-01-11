

var d = new Date()
document.getElementById("demo").innerHTML = d;
document.getElementById("demo2").innerHTML = ("<b>year is: </b>")+d.getFullYear();



var date=new Date();
document.write(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
document.write(" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());



var date=new Date();
document.write("Day is: ");
document.write(date.getDate()+"<br>");
document.write("Month is: ");
document.write(date.getMonth()+1+"<br>");
document.write("Year is: ");
document.write(date.getFullYear()+"<br><br>");


var d = new Date()
        document.getElementById("demo").innerHTML = d;



function calculate() {
  var FN=document.getElementById('fn').value;
  var A=document.getElementById('a').value;
  var H=document.getElementById('h').value;
  var W=document.getElementById('w').value;
 var G=document.getElementsByName('g');
var L=document.getElementsByName('l');

var toCal=true;



  if(FN==""){
document.getElementById('fnerror').innerHTML="must enter your name!";
toCal=false;
}
else {
        document.getElementById('fnerror').innerHTML = "";
    }
  

if(A<0||A==""){
  document.getElementById('aerror').innerHTML="must enter a valid number!";
  toCal=false;

}
  else {
        document.getElementById('aerror').innerHTML = "";
    }

  if(H<0 && H>3 || H==""){
  document.getElementById('herror').innerHTML="must enter a valid number!";
  toCal=false;

}
  else {
        document.getElementById('herror').innerHTML = "";

    }

  if(W<0||W==""){
  document.getElementById('werror').innerHTML="must enter a valid number!";
  toCal=false;

}
  else {
        document.getElementById('werror').innerHTML = "";
    }


    let selectedG = false;

    for (let i = 0; i < G.length; i++) {
        if (G[i].checked) {
            selectedG = true;
            var sg=G[i].value;
            break;
        }
    }

    if (!selectedG) {
        document.getElementById('gerror').innerHTML = "Must select your gender!";
        toCal=false;


    } else {
        document.getElementById('gerror').innerHTML = "";
    }

    let selectedL = false;

    for (let i = 0; i < G.length; i++) {
        if (L[i].checked) {
            selectedL = true;
            var sl=L[i].value;
            break;
        }
    }

    if (!selectedL) {
        document.getElementById('lerror').innerHTML = "Must select your lifestyle!";
        toCal=false;


    } else {
        document.getElementById('lerror').innerHTML = "";
    }
  
if(toCal==true){
var bmi=W/(H*H);
var ou;
var msg;
if(bmi<18.5){
  ou="Underweight";
  msg="Visit our diets page  for helpful diets to gain weight."
}else if(bmi>=18.5&&bmi<=24.9){
ou="Normal";
}else if(bmi>=25.0&&bmi<=29.9){
ou="Overweight";
msg="Visit our diets page  for helpful diets to lose weight.";
}else{
  ou="Obesity";
  msg="Visit our diets page  for helpful diets to lose weight.";

}

    document.getElementById('fn').value = "";
    document.getElementById('a').value = "";
    document.getElementById('h').value = "";
    document.getElementById('w').value = "";

    // Clear radio buttons
    let G = document.getElementsByName('g');
    for (let i = 0; i < G.length; i++) {
        G[i].checked = false;
    }
    let L = document.getElementsByName('l');
    for (let i = 0; i < L.length; i++) {
        L[i].checked = false;
    }
document.getElementById('BMIresult').innerHTML="Your BMI is "+bmi+" , indicating that you are "+ou+" ." ;
document.getElementById('BMIresult2').innerHTML=msg;

document.getElementById('result').innerHTML="Height: " + H + "\n" + "Weight: "  + W + "\n"  + 
"Gender: " + sg + "\n" +
"Lifestyle: " + sl + "\n" + "BMI: " + bmi + "\n" + "Status: " + ou;
  }}