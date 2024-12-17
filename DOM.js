let boxes = document.querySelectorAll(".box");
let restartbtn = document.querySelector("#restart-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");




let turnX = true;
let count = 0;

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


let restartgame = () => {
    turnX = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => { 
        console.log("box was clicked");
        if (turnX) {
            box.innerHTML = "X";
            turnX = false;
        }
        else {
            box.innerHTML = "O";
            turnX = true;
        }

        box.disabled = true;
        count++;


        let isWinner = checkwinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }

    });

});


let gamedraw = () => {
    msg.innerHTML = 'Game was a Draw.';
    msgcontainer.classlist.remove("hide");
    disableboxes();
};

let disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

let enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};



let showWinner = (WINNER) => {
    msg.innerHTML = "congrats, winner is  $(winner)";
    msgcontainer.classlist.remove("hide");
    disableboxes();
};

let checkwinner = () => {
    for (let pattern of winpattern) {
        // console.log([pattern[0]],[pattern[1]],[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let position1Val = boxes[pattern[0]].innerHTML;
        let position2Val = boxes[pattern[1]].innerHTML;
        let position3Val = boxes[pattern[2]].innerHTML;

        if (position1Val != "" && position2Val != "" && position3Val != "") {
            if (position1Val === position2Val && position2Val === position3Val) {
                console.log("WINNER", position1Val);
            }
        }

    }
};
newgamebtn.addEventListener("click", restartgame);
restartbtn.addEventListener("click", restartgame);