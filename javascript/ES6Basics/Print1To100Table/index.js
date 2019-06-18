var table = document.getElementById('table');
table.border=1;
console.log(table);

for(i =1; i<11; i++){
    var tr= document.createElement("TR");
    console.log(tr);

    table.appendChild(tr);

    for(var j=1; j<11; j++){
        var td = document.createElement("TD");
        td.setAttribute("id",((i-1)*10)+j);
        var t = document.createTextNode(j);
        td.appendChild(t);

        tr.appendChild(td);
        
    }
}