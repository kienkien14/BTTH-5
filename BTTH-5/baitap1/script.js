const deleteBtn = document.querySelector('.delete')
const confirmBtn = document.querySelector('.popup-confirm')
const cancel = document.querySelector('.popup-cancel')
const popup = document.querySelector('body')
let content = document.querySelector('.content')

const contentList = ["Learn React"]


window.addEventListener("DOMContentLoaded",()=>{
    content.innerHTML = contentList[0];
})

deleteBtn.addEventListener('click',function(){
    popup.classList.add('show')
})

cancel.addEventListener('click',function(){
    popup.classList.remove('show')
})

confirmBtn.addEventListener('click',function(){
    contentList.splice(0,1);
    if(contentList.length<1){
        content.innerHTML="";
    }
    else{
        content.innerHTML = contentList[0];
    }

    popup.classList.remove('show')
   
})
