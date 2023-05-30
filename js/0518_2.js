// for in 반복문
// window
for(var i in window){
    // console.log(`${i} : ${window[i]}`);
}

var user = [{
      "userId": 1,
      "id": 1,
      "title": "welcome occaecati excepturi optio reprehenderit",
      "body": "quia et suscipiem sunt rem eveniet architecto"
},
{
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitaqui neque nisi nulla"
},
{
    "userId": 1,
    "id": 3,
    "title": "ea molestm repellat qui ipsa sit aut",
    "body": "et iusto sed quo it labore et velit aut"
}];
console.log(user[0].title);

for(var i=0; i<user.length; i++){
    document.write("title :" + user[i].title);
    document.write("<br>");
}
document.write("<hr>");
for(var i=0; i<user.length; i++){
    document.write(user[i].id +" : " + user[i].title);
    document.write("<br>");
}
document.write("<hr>");
for(var i=0; i<user.length; i++){
    document.write(user[i].body);
    document.write("<br>");
}
document.write("<hr>");
for(var i in user){
    document.write(user[i]);
    console.log(user[i]);
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))