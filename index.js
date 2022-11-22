let addtodo=document.getElementById("addtodo");
let inputfield=document.getElementById("inputfield");
let btn=document.getElementById("btn");
btn.addEventListener('click',function(){
    let paragraph=document.createElement('p')
    paragraph.classList.add("paragraph-styling")
    paragraph.innerText=inputfield.value;
    addtodo.appendChild(paragraph);
    inputfield.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
            })
            paragraph.addEventListener('dblclick',function(){
                addtodo.removeChild(paragraph);
                    })

})
