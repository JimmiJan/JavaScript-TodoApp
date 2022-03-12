let todo =document.getElementById("todo")


let Add = document.getElementById("Add")
let Delete = document.getElementById("DeleteAll")
function add() {
    let input = document.getElementById("input")

    let li = document.createElement("li")
    let litext = document.createTextNode(input.value)
    li.setAttribute("class","lis")
    li.appendChild(litext)



    var edit = document.createElement("button")
    var editText = document.createTextNode("Edit")
    edit.appendChild(editText)

    edit.setAttribute("onclick", "editItem(this)")
    edit.setAttribute("class", "btn btn-info btn")
    edit.setAttribute("id", "edbtn")

    // input.value=""


    var del = document.createElement("button")
    var delText = document.createTextNode("Delete")
    del.appendChild(delText)
    

    del.setAttribute("onclick", "dele(this)")
    del.setAttribute("class", "btn btn-danger btn")
    del.setAttribute("id", "deles")





    todo.appendChild(li)

    input.value=("")
    li.appendChild(edit)
    li.appendChild(del)
    
}




function DeleteALl(){
    todo.innerHTML=""
}





function editItem(e){
    var value =e.parentNode.firstChild.nodeValue
    var update =prompt("Edit Todo",value)
    console.log(e,"jamshed")
    e.parentNode.firstChild.nodeValue=update
}

function dele(e){
    console.log("jamshed")
    e.parentNode.remove()
}

