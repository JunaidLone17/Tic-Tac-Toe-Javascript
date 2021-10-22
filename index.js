const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const box1input = document.getElementById('box1-input');
const box2input = document.getElementById('box2-input');
const box3input = document.getElementById('box3-input');
const box4input = document.getElementById('box4-input');
const box5input = document.getElementById('box5-input');
const box6input = document.getElementById('box6-input');
const box7input = document.getElementById('box7-input');
const box8input = document.getElementById('box8-input');
const box9input = document.getElementById('box9-input');
const winnertext = document.getElementById('Winner');
const gameoverpanel = document.getElementById('gameover');

var input = ["X","0"];
var index = 0;
box1.addEventListener("click", function (params) {
    box1input.innerText = input[index];
    if (index == 0) {
        index = 1;
    } else if (index == 1) {
        index = 0;
    }
    checkwinner();
});

box2.addEventListener("click", function () {
    box2input.innerText = input[index];
     if (index == 0) {
        index = 1;
    } else if (index == 1) {
         index = 0;
    }
    checkwinner();

});
box3.addEventListener("click", function () {
    box3input.innerText = input[index];
     if (index == 0) {
        index = 1;
    } else if (index == 1) {
        index = 0;
    }
    checkwinner();

});
box4.addEventListener("click", function () {
    box4input.innerText = input[index];
     if (index == 0) {
        index = 1;
    } else if (index == 1) {
        index = 0;
    }
    checkwinner();

});
box5.addEventListener("click", function () {
    box5input.innerText = input[index];
     if (index == 0) {
        index = 1;
    } else if (index == 1) {
        index = 0;
    }
    checkwinner();

});
box6.addEventListener("click", function () {
    box6input.innerText = input[index];
     if (index == 0) {
        index = 1;
    } else if (index == 1) {
        index = 0;
    }
    checkwinner();

});
box7.addEventListener("click", function () {
    box7input.innerText = input[index];
     if (index == 0) {
        index = 1;
    } else if (index == 1) {
        index = 0;
    }
    checkwinner();

});
box8.addEventListener("click", function () {
    box8input.innerText = input[index];
     if (index == 0) {
        index = 1;
    } else if (index == 1) {
        index = 0;
    }
    checkwinner();

});
box9.addEventListener("click", function () {
    box9input.innerText = input[index];
     if (index == 0) {
        index = 1;
    } else if (index == 1) {
        index = 0;
    }
    checkwinner();

});

function checkwinner() {
    if (box1input.innerText == "X" && box2input.innerText == "X" && box3input.innerText == "X") {
        var winner = "X";
        displaywinner(winner);
        
        
    
    }
    if (box1input.innerText == "X" && box4input.innerText == "X" && box7input.innerText == "X") {
        var winner = "X";
        displaywinner(winner);

    }
    if (box1input.innerText == "X" && box5input.innerText == "X" && box9input.innerText == "X") {
        var winner = "X";
        displaywinner(winner);
        
    }
    if (box1input.innerText == "0" && box2input.innerText == "0" && box3input.innerText == "0") {
        var winner = "0";
        displaywinner(winner);
    
    }
    if (box1input.innerText == "0" && box4input.innerText == "0" && box7input.innerText == "0") {
        var winner = "0";
        displaywinner(winner);

    }
    if (box1input.innerText == "0" && box5input.innerText == "0" && box9input.innerText == "0") {
        var winner = "0";
        displaywinner(winner);
    }

    if (box2input.innerText == "X" && box5input.innerText == "X" && box8input.innerText == "X") {
        var winner = "X";
        displaywinner(winner);
    }
    
    if (box2input.innerText == "0" && box5input.innerText == "0" && box8input.innerText == "0") {
        var winner = "0";
        displaywinner(winner);
    }
    if (box3input.innerText == "X" && box6input.innerText == "X" && box9input.innerText == "X") {
        var winner = "X";
        displaywinner(winner);
    }
    if (box3input.innerText == "0" && box6input.innerText == "0" && box9input.innerText == "0") {
        var winner = "0";
        displaywinner(winner);
    }

    
    if (box4input.innerText == "X" && box5input.innerText == "X" && box6input.innerText == "X") {
        var winner = "X";
        displaywinner(winner);
    }
    if (box4input.innerText == "0" && box5input.innerText == "0" && box6input.innerText == "0") {
        var winner = "0";
        displaywinner(winner);
    }
     if (box7input.innerText == "X" && box8input.innerText == "X" && box9input.innerText == "X") {
         var winner = "X";
        displaywinner(winner);
     }
    if (box7input.innerText == "0" && box8input.innerText == "0" && box9input.innerText == "0") {
        var winner = "0";
        displaywinner(winner);
        
    }

}
function displaywinner(winner) {
    this.winner = winner;
    gameoverpanel.style.display = "block";
    winnertext.innerText = winner + " Won";
    
}