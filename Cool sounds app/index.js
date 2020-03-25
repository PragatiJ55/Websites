window.addEventListener("load",()=>{
    var k=-1;
    const pads=document.querySelectorAll(".Bottom-bars div");
    const sounds=document.querySelectorAll("audio");
    const visual=document.querySelector(".Visual");
    const pause=document.querySelector(".Pause");
    const colors=["#ec5656" , "#e5f74b",
            "#56ec62",
            "#2db6c9",
            "#5e43f5",
            "#ec56cb"
    ];
    pads.forEach((pad,index) => {
        pad.addEventListener("click",function(){
        if(k!=-1){
            sounds[k].pause();
        }    
        
        sounds[index].currentTime=0;
        sounds[index].play();   
        k=index;
        pause.addEventListener("click",function(){
            sounds[index].pause();
        })
        createBubbles(index);
        });
    });
    
    //Function for bubbles
    const createBubbles = (index) =>{
        const bubbles= document.createElement("div");
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor=colors[index];
        bubbles.style.animation= "jump 1s ease";
        bubbles.addEventListener("animationend",function()
        {
            visual.removeChild(this);
        })
    }
})
