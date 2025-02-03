let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let mess=document.querySelector(".msg");
let message=document.querySelector("#mes");

let turnO=true;
const win=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if(turnO){
        box.innerText='O';
        turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const enableBoxes= () =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        mess.classList.add("hide");

    }
}
const showWinner=(winner)=>{
    message.innerText=`Congratulations, Winner is ${winner}`;
    mess.classList.remove("hide");
    disabledBoxes();

}
const disabledBoxes= () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const checkwinner= () => {
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
       if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
       }
    }
};
const resetgame = () =>
{
    turnO=true;
    enableBoxes();
    mess.classList.add("hide");

}
newgame.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);