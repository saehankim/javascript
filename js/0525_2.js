var lang=document.getElementById('lang')
var span=document.querySelector('span')

lang.onchange=function(){
    span.innerHTML=
    `<h3>${lang.selectedIndex+1} 번째에
    ${lang.value}를 선택</h3>
    `
}
lang.onblur=function(){
    lang.options[2].value="HTML5"
    lang.options[2].innerHTML="HTML5"
}
var last=lang.options[2].value;
lang.options[2].selected=true
span.innerHTML="<h2>"+last+"부터 시작한다.</h2>"

var button = document.querySelector('button');

var mama = document.getElementById('mama');
button.onclick=function(){
        var span = document.querySelector('span')
        if (span != null) {
            mama.removeChild(span);
            console.log(mama.childNodes.length)
        }else{
            console.log("자식이 없습니다.")
            return
        }
    }


    // var i=0;
    // var stop=setInterval(function(){
    //     document.body.innerHTML += "<h1>welcome "+i+"</h1>"
    //     i++;
    //     if(1==5) {
    //         clearInterval(stop)
    //         document.body.innerHTML +="인터벌중지"
    //     }
    // },1000)
    // var ID= setInterval(callback.time)
    // clearInterval(ID)

    setInterval(function(){
        var time=document.getElementById('time')
        time.innerHTML=new Date().toLocaleDateString()
        time.innerHTML+=new Date().toLocaleTimeString()
    },1000)