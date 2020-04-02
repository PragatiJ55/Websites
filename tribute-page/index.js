var checklist=document.querySelector("ul");
const edit=checklist.querySelectorAll("li");

edit.forEach(function(item,index){
    item.addEventListener("click",function(){
        if(this.className==""){
            var input=item.getElementsByTagName("input");
            input.addEventListener("keyup",function(event){
                this.className="edit";
                if(event.keyCode==13){
                    var span_ele=item.querySelector("span");
                    span_ele.textContent=input.value();
                }
            })

        }
    })
})



