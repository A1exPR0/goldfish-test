console.log("hello");
document.querySelector("#select_all+label").addEventListener("click",()=>{
    let checked=!document.querySelector("#select_all").checked;
    let boxes=document.querySelectorAll(".table__checkbox");
    let arr=[...boxes];
    arr.shift();
    if(checked)
        {
            arr.forEach(box => {
                box.checked=true;
            });
            // console.log(arr);
        }
        else{
            arr.forEach(box => {
                box.checked=false;
            });
            
    }

    
});

