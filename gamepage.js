player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_h").innerHTML = player1 + " :";
document.getElementById("player2_h").innerHTML = player2 + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML ="Question turn - " + player1;
document.getElementById("player_answer").innerHTML ="Answer turn - " + player2;

function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    answer = parseInt(number1) * parseInt(number2);


    question_word = "<h4 id='word-display'>Q." + number1 + "X " + number2 + "</h4>";
    input_box ="<br>Answer : <input id='check_box' type = 'text'>";
    check_button ="<br><br><button class ='btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer =  document.getElementById("check_box").value;
    if(get_answer == answer){  
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score; 
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn - " + player2;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn - " + player1;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn - " + player2;
    } else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn - " + player1;
}
document.getElementById("output").innerHTML = "";
}