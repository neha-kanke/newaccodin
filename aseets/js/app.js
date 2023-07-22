 

const cl=console.log


// const accod=document.querySelectorAll('.accodhead')  /// it is node list so convert array

const accod=[...document.querySelectorAll(".accodhead")]


const onheadingclick = (eve) =>{
    // cl(eve)
    let classvalue=eve.target.className;
    // cl(classvalue)
    accod.forEach(head=>{
        head.classList.remove('active');
    })
    if(classvalue.includes('active')){
        eve.target.classList.remove('active')
    }
    else{
        eve.target.classList.add("active")
    }

}








accod.forEach(heading=>{
    heading.addEventListener("click", onheadingclick)
})