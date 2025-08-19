
// Your JavaScript goes here!
function get_computer_choice() {
    const options = ["rock", "paper", "scissors"];
    let random_number = Math.floor(Math.random() * 3)
    // alert(random_number);
    let computer_choice = options[random_number]
    return computer_choice;
}

const optionButtons = document.querySelector(".container");

optionButtons.addEventListener("click", play);

function win(whom){
    if(whom == "human"){
        let score = document.querySelector(".humanScore");
        //console.log(score.innerHTML);
        score.textContent = parseInt(score.textContent) + 1;
    } else {
        let score  = document.querySelector(".computerScore");
        //console.log(score.textContent);
        score.textContent = parseInt(score.textContent) + 1;
    }
}

function play(event) {

    let human_choice = event.target.id
    console.log(human_choice)
    // alert(human_choice);
    let computer_choice = get_computer_choice();
    // alert(computer_choice);
    switch (human_choice) {
        case "rock":
            switch (computer_choice) {
                case "rock":
                    alert("It's a Draw");
                    break;
                case "scissors": 
                    alert("You Win!");
                    win("human")
                    break;
                case "paper": 
                    alert("Computer Wins!");
                    win("computer")
                    break;
            }
            break;

        case "paper":
            switch (computer_choice) {
                case "paper":
                    alert("It's a Draw");
                    break;
                case "rock": 
                    alert("You Win!");
                    win("human")
                    break;
                case "scissors": 
                    alert("Computer Wins!");
                    win("computer")
                    break;
            }
            break;

        case "scissors":
            switch (computer_choice) {
                case "scissors":
                    alert("It's a Draw");
                    break;
                case "paper": 
                    alert("You Win!");
                    win("human")
                    break;
                case "rock": 
                    alert("Computer Wins!");
                    win("computer")
                    break;
            }
            break;

        default:
            alert("Invalid choice! Please select rock, paper, or scissors.");
    }
}