// window. onload=function(){ }
// load 이벤트이름, 이벤트타입
// onload 이벤트속성
// 할당된함수 : 이벤트리스너, 이벤트핸들러
// 이벤트 연결한다.

// 이벤트 관련속성
// click, mouseover, mouseenter, focus

// 이벤트 모델
// DOM Level 0
// 인라인이벤트모델, 기본이벤트모델(고전이벤트)
// 한 객체에 두번이상 적용할 수 없다.

// DOM Level 2
// 표준이벤트모델, 익스플로러이벤트모델
// addEventListener(type,listener,false)
// attachEvent 

// 익스플로러면 attachEvent를 사용하고
// 그 외에는 addEventListner를 사용한다
// 크로스브로우징 위한 코드구현

// 이벤트 제거
header.onclick=function(e){
    console.log(this);
    console.log(e);  // e, window.event (고전)
    var event=e || window.event;

    header.onclick= null;  // 이벤트 제거
    for(var key in e){
        box.innerHTML+=`<p>${key} : ${e[key]} </p>`
    }
    console.log(e.target);   // 자식
    console.log(e.currentTarget);   // 부모
}

// 이벤트 강제실행
a.onclick=function(){
    ca.innerHTML = Number(ca.innerHTML)+1
}
b.onclick=function(){
    cb.innerHTML = parseInt(cb.innerHTML)+1
    a.onclick();  // 강제실행
}
// 자동실행
var stop=setInterval(b.onclick,0.1)
c.onclick=function(){
    clearInterval(stop);
}
d.onclick=function(){
    stop=setInterval(b.onclick,0.1)
}
// 기본이벤트제거
// 이벤트전달제거
// preventDefault()
// stopPropagation();

// 기본이벤트 -> a태그 클릭
// form -> sbumit
// daum.onclick=function(e){
//     this.style.background='pink';
//     //e.preventDefault();
//     // return false;
// }
// href="javascript:void(0)"
daum.addEventListener('click',function(){
    this.style.background='pink';
});

function naver(){
    naver2.style.background="red"
    return false;
}
// 한글입력시에 전송한다.
var form2=document.getElementById('form2');
// form2.onsubmit=function(){
//     var val=name2.value;
//     console.log(val);
//     if(val.replace(/[가-힝]/g,"").length==0){
//      event.preventDefault();
//         return false;
//     }else{
//         //return false;
//         alert("한글 이름을 입력하세요");
//         event.preventDefault();
//     }
// }

form2.addEventListener('submit',function(){
    var val=name2.value;
    console.log(val);
    if(val.replace(/[가-힝]/g,""))
})

