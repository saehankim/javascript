var test=document.getElementById('test')

try{
console.log("welcome")
// throw "무슨에러인가?"
}catch(err){
test.innerHTML = err.message
}
test.style.color='red';

// throw 사용자지정 오류를 만든다.
var numBox=document.getElementById('numBox')
var btn=document.getElementById('btn')
var errText=document.getElementById('errText')

var show=false;
btn.addEventListener('click', function(){
    var val=numBox.value
    errText.innerHTML='welcome'+val

try{
if (val=='') {throw "비어있음"}
if (isNaN(val)) throw "숫자가 아닙니다"
if (val < 1) throw "숫자가 너무 작습니다."
if (val > 10) throw "숫자가 너무 큽니다."
show=false
}catch(err){
    errText.innerHTML= "에러메시지 : " + err
    show=true
}finally{
    if(show) numBox.value=""
}
errText.style.color='red'
})

var num=123.123456
try{
console.log(num.toFixed(2))
console.log(num.toPrecision(30))  // RangeError
num=num+1;    // ReferenceError
// eval("alert('hello')")   Syntax Error
// num.toUpperCase();  //TypeError
//console.log(decodeURI('http://www.daum.net/aaa%%%'))   URIError
//console.log(encodeURI('http://www.daum.net/$$$'))      URIError
console.log(num/0)
}catch(err){
    errText2.innerHTML=err.name + ": "+ err.message
}
 // toPrecision 수의 길이를 제한
 // toFixed 소수점의 길이를 제한
 errText2.style.color='red'