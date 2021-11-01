player1 = localStorage.getItem("Player.1");
player2 = localStorage.getItem("Player.2");
Score_1 = 0;
Score_2 = 0;
document.getElementById("player1_name").innerHTML = player1 + ":";
document.getElementById("player2_name").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = Score_1;
document.getElementById("player2_score").innerHTML = Score_2;

document.getElementById("player_q").innerHTML = "Question turn -" + player1;
document.getElementById("player_ans").innerHTML = "Answer turn -" + player2;

function send ()
{
    
    number1 = document.getElementById("word").value;
    number2 = document.getElementById("word1").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X"+ number2 + "</h4>";
    input_box = "<b4>Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<b4><b4><button class = 'btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("word1").value = "";
}
question_turn = "Player.1";
answer_turn = "Player.2";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        Score_1 = Score_1 +1;
        document.getElementById("player1_score").innerHTML = Score_1;
    }
    else
    {
        Score_2 = Score_2 +1;
        document.getElementById("player2_score").innerHTML = Score_2; 
    }
    if(question_turn == "Player.1")
    {
        question_turn = "player.2"
        document.getElementById("player_q").innerHTML = "Question_turn -" + player2;
    }
    else
    {
        question_turn = "Player.1"
        document.getElementById("player_q").innerHTML = "Question_turn -" + player1;
    }
    if(answer_turn == "Player.1")
    {
        answer_turn = "player.2"
        document.getElementById("player_ans").innerHTML = "Answer_turn -" + player2;
    }
    else
    {
        answer_turn = "Player.1"
        document.getElementById("player_ans").innerHTML = "Answer_turn -" + player1;
    }
}
