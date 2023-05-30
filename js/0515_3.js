function calc(){
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var sum;
    sum = parseInt(x) + ParseInt(y);
    document.getElementById("sum").value = sum;
}


// var msg="";
// var time=new Date().getHours();
// if(time<12){
//     msg="Good Morning";
// }
// else if (time<18){
//     msg= "Good Afternoon";
// }
// else{
//     msg="Good evening";
// }
// alert(msg);

var grade=prompt("성적을 입력하시오:", "A-F사이의 문자로");
switch (grade){
    case 'A':alert("잘했어요!"); break;
    case 'B':alert("좋은 점수군요!"); break;
    case 'C':alert("괜찮은 점수군요"); break;
    case 'D':alert("좀 더 노력하세요"); break;
    case 'F':alert("다음 학기 수강하세요"); break;
    default:alert("알 수 없는 학점입니다"); break;
    
}