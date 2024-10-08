// Countdown code
document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const today = new Date(); // Creating obj for today's date
        const halloween = new Date(today.getFullYear(), 9, 31); // Create obj for halloween

        if (today > halloween) {
            halloween.setFullYear(halloween.getFullYear() + 1);
        }

        const timeDiff = halloween - today;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
        countdownElement.textContent = `Time until Halloween: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

// Carving code

const canvas = document.getElementById("carve-layer");

let drawing = canvas.getContext("2d");

canvas.width = canvas.offsetHeight;
canvas.height = canvas.offsetHeight;

drawing.strokeStyle = "#000000";
drawing.lineWidth = 10;
drawing.lineCap = "round";

let carving = false;

canvas.addEventListener("mousedown", function(e){
    carving = true;
    drawing.beginPath();
    drawing.moveTo(e.offsetX, e.offsetY);
})

canvas.addEventListener("mouseup", function(){
    carving = false;
})

canvas.addEventListener("mousemove", function(e){
    if (carving){
        drawing.lineTo(e.offsetX, e.offsetY);
        drawing.stroke();
    }
})

canvas.addEventListener("mouseleave", function(){
    carving = false;
})

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    drawing.clearRect(0, 0, canvas.width, canvas.height);
});

let doneButton = document.getElementById("done");
doneButton.addEventListener("click", function(){
    let textContainer = document.getElementById("text-container");
    textContainer.textContent = "Enjoy Halloween!";
})


})
