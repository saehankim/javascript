var now=new Date();
// Date라는 객체를 생성한다.
// now에 위임한다. now가 참조한다.
// 현재 시간과 날짜를 생성하는 객체(date)
//"" 따옴표를 안 쓰는것으로 문자가 아닌 함수로 사용

document.write(now);
document.write("<br>");
document.write("now");

var 야옹이=new 고양이();
// new 생성자함수를 만드는 키워드
document.write(야옹이);

function 고양이(){
    document.write("나는 고양이이다");
}

document.write("Hello World!");

var x;
x = "hi!!!!!!!!!!";
alert(x);

var s;
s= 100;
document.write(s+"<br>");

s="홍길동";
document.write(s+"<br>");

var myCar={model:"forsche", color:"chrome", hp:300};
document.write(myCar.model+"<br>");
document.write(myCar.color+"<br>");
document.write(myCar.hp+"<br>");

var age=prompt("나이를 입력하세요","만 나이로 입력합니다.");