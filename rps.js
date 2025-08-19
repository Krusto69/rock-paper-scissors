
// Your JavaScript goes here!
function get_computer_choice() {
    const options = ["Rock", "Paper", "Scissors"];
    let random_number = Math.floor(Math.random() * 3)
    // console.log(random_number);
    let computer_choice = options[random_number]
    return computer_choice;
}

function get_human_choice(){
    user_choice = prompt("Please enter your choice between 'Rock', 'Paper' and 'Scissors'");
    return user_choice;
}

function play() {

    console.log("Good Luck!");

    let human_choice = get_human_choice();
    // console.log(human_choice);
    let computer_choice = get_computer_choice();
    // console.log(computer_choice);
    switch (human_choice) {
        case "Rock":
            switch (computer_choice) {
                case "Rock":
                    console.log("It's a Draw");
                    break;
                case "Scissors": 
                    console.log("You Win!");
                    break;
                case "Paper": 
                    console.log("Computer Wins!");
                    break;
            }
            break;

        case "Paper":
            switch (computer_choice) {
                case "Paper":
                    console.log("It's a Draw");
                    break;
                case "Rock": 
                    console.log("You Win!");
                    break;
                case "Scissors": 
                    console.log("Computer Wins!");
                    break;
            }
            break;

        case "Scissors":
            switch (computer_choice) {
                case "Scissors":
                    console.log("It's a Draw");
                    break;
                case "Paper": 
                    console.log("You Win!");
                    break;
                case "Rock": 
                    console.log("Computer Wins!");
                    break;
            }
            break;

        default:
            console.log("Invalid choice! Please select Rock, Paper, or Scissors.");
    }
}

play()

