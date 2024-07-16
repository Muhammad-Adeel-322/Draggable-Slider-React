let MainContainer = document.querySelector(".container")
let Slides_Parent = document.querySelector(".cards")

let PressDown = false

let XSpace

MainContainer.addEventListener("mousedown",(s)=>{
    PressDown = true
    XSpace = s.offsetX - Slides_Parent.offsetLeft
    console.log(s.offsetX);
    console.log(Slides_Parent.offsetLeft);
    console.log(XSpace);
    MainContainer.style.cursor = "grabbing"
})
MainContainer.addEventListener("mouseup",() =>{
    MainContainer.style.cursor = "grab"
})
window.addEventListener("mouseup",()=>{
    PressDown = false
})
MainContainer.addEventListener("mousemove",(s)=>{
    if(!PressDown) return;
    s.preventDefault()
    Slides_Parent.style.left = `${s.offsetX - XSpace}px`
    // console.log(s.offsetX);
    CallBack()
})
function CallBack(){
    let Main_Rect = MainContainer.getBoundingClientRect()
    let Slides_Rect = Slides_Parent.getBoundingClientRect()

    if(parseInt(Slides_Parent.style.left) > 0){
        Slides_Parent.style.left = 0;
    }
    else if(Slides_Rect.right < Main_Rect.right){
        Slides_Parent.style.left = `-${Slides_Rect.width - Main_Rect.width}px`
    }
}