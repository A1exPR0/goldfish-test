document.querySelector("#select_all+label").addEventListener("click",()=>{
    let checked=!document.querySelector("#select_all").checked;
    let boxes=document.querySelectorAll(".table__checkbox");
    let arr=[...boxes];
    arr.shift();
    if(checked) arr.forEach(box => {box.checked=true;});
    else arr.forEach(box => {box.checked=false;});
});

let stars=document.querySelectorAll(".fa-star");
stars.forEach((star)=>{star.addEventListener("click",(e)=>{
    let star=e.target;
    star.classList.toggle("fa-regular");
    star.classList.toggle("fa-solid");
    star.classList.toggle("checked");
});})

let arrows=document.querySelectorAll(".fa-angle-right");
arrows.forEach((arrow)=>{
    arrow.addEventListener("click",(e)=>{
        let arrow=e.target;
        arrow.classList.toggle("checked");
        let info=arrow.parentNode.parentNode.parentNode.parentNode.nextElementSibling;
        console.log(info);
        if(info.classList.contains("additional-row")){
        if(arrow.classList.contains("checked")){
            arrow.style.transform="rotate(90deg)";
            arrow.style.transition="all 0.2s ease-in-out";
        //    arrow.parent.parent.parent.parent.nextSibling.style.display="block" // console.log("open additional info");
            // console.log(arrow.parentNode.parentNode.parentNode.parentNode.nextElementSibling);
            // info.classList.toggle("collapse");
            info.style.opacity=1;
            info.style.transition="1s all"
            info.style.display="table-row";
        }
        else {
            arrow.style.transform="rotate(0deg)";
            info.style.opacity=0;
            info.style.display="none";

            // info.classList.toggle("collapse");
        }}

    })
});
document.querySelector(".table__header--tools--switch").addEventListener("click",(e)=>{
    console.log("btns liostener");
    // let btn=e.target;
    let arr=[...e.target.parentNode.children]
    arr.forEach((btn)=>{
        btn.classList.toggle("selected");
    })
});
