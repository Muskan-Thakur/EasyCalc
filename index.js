document.getElementById("num1").textContent=num1
document.getElementById("num2").textContent=num2

let summ=document.getElementById("sum")
function add()
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1+num2
    summ.textContent="Result:" + result;
}
function sub()
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result=num1-num2
    summ.textContent="Result:"+result;
}
function Multiply()
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result=num1*num2
    summ.textContent="Result: "+result;
}
function divide()
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result=num1/num2
    summ.textContent="Result: "+result;
}


