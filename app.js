//call all the requred elements
const boxes = document.querySelectorAll(".box");
const container = document.querySelector(".container");
const resetBtn = document.querySelector("#resetBtn");
const newBtn = document.querySelector("#newBtn")
const msg = document.querySelector(".msg");
const winContainer = document.querySelector(".winContainer");
const hide1 = document.querySelector(".hide1")

// winning patterns
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

// make input field
boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turnO){
            box.innerHTML = "X";
            turnO = false;
        }
        else{
            box.innerHTML = "O";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// buttons controls
const remBtn = () => {
    if(hide1){
    hide1.style.display = 'none';
    };
};

const resetGame = () => {
    let turn0 = true;
    enableBox();
     // Show the reset button again
     if (hide1) {
        hide1.style.display = "inline-block";  // or "inline-block" if needed
    }

}

const enableBox = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
        winContainer.classList.add("hide");
    }
}
const disabledBox = () => {
    for (box of boxes){
    box.disabled = true;
    };
};



// check winner
const checkWinner = () => {
    for (let patterns of winPatterns){
        let pos1Value = boxes[patterns[0]].innerText;
        let pos2Value = boxes[patterns[1]].innerText;
        let pos3Value = boxes[patterns[2]].innerText;

        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value == pos3Value){
                console.log("winner")
                showWinner(pos1Value)
            };
        };
    };
};
const showWinner = (winner) => {
    msg.innerHTML = `Congratulation Winner is ${winner}`;
    winContainer.classList.remove("hide");
    disabledBox();
    remBtn();
};


//cll the function to get restart or new start
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);