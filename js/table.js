document.write("<h1>구구단표</h1>");
document.write("<table border=10 width=30%>");

for (var i=1; i<=9; i++){
    document.write("<tr>")
    document.write("<td>" + i + "</td>")


for (var j=2; j<=9; j++){
    document.write("<td>" + i * j + "</td>");
}
document.write("</tr>");
}

document.write("</table>");