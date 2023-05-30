// createElement()
// createTextNode()
// <h1> welcome </h1>
// append 나 appendChild


// 문서객체 만들기
// 객체를 생성
// var header=document.createElement('h1');
// var text=document.createTextNode("welcome");

// // 노드를 연결
// header.appendChild(text);
// // document.body.appendChild(header);

// var box=document.getElementById('box');
// // box.innerHTML="header";
// box.appendChild(header);
// box2.appendChild(header);

// box.innerHTML=header.innerHTML;
// box2.innerHTML=header.innerHTML;

// 이벤트
// add.onclick=function(){ }
// 고전 이벤트


// 표준 이벤트
// add.adEventListener('click',function(){ });

var add=document.getElementById('add');
var del=document.getElementById('del');
var i=0;

add.addEventListener('click', function(){
    i++;
    var h2 = document.createElement('h2');
    var text = document.createTextNode('welcome');
    h2.appendChild(text);
    document.body.appendChild(h2);
});


del.addEventListener('click', function(){
    var h2 = document.getElementsByTagName('h2');
    var i=h2.length-1
    if(i<0) return false;
    // for (var i = 0; i < h2.length; i++) {
        document.body.removeChild(h2[i]);
    // }
});


add.style.backgroundColor='tomato';
del.style.backgroundColor='slateblue';



function Marin(level, name, 종족, life){
    this.life = life;
    this.name = name;
    this.level = level;
    this.종족 = 종족;
    this.fire=function(){
        this.level += 1;
        if (this.level <3) {
        document.write(this.name+"이 공격합니다.<br>");
    } else {
        document.write(this.name+"이 스팀팩을 장착했습니다.<br>");
    }
};
this.defend=function(){
    this.life -= 5;
    if (this.life < 0)
    document.write("마린이 전사했습니다.<br>");
};
this.정찰=function(){
    document.write("정찰 나갑니다.<br>");
}
}
var 마린1=new Marin(1, "마린", "테란", 10);
마린1.fire();
마린1.fire();
마린1.fire();
마린1.fire();
마린1.defend();
마린1.defend();
마린1.defend();
마린1.defend();


setInterval(마린1,정찰,3000);