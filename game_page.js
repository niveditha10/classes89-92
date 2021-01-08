player1_name=localStorage.getItem("player_1name");
player2_name=localStorage.getItem("player_2name");

player1_score=0;
player2_score=0;

document.getElementById("player_1name").innerHTML=player1_name+" : ";
document.getElementById("player_2name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;


function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();

    x=word.charAt(1);

    divide= Math.floor(word.length/2);
    y=word.charAt(divide);

    minus=word.length-1;
    z=word.charAt(minus);

    remove_x=word.replace(x,"_");
    remove_y=remove_x.replace(y,"_");
    remove_z=remove_y.replace(z,"_");
 
    question="<h4 id='word-display'>Q."+remove_z+"</h4>";
    input=" <br> Answer: <input type='text' id='input'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question+input+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").innerHTML="";
}

question_turn="player_1";
answer_turn="player_2";

function check(){

get_answer=document.getElementById("input").value;
answer=get_answer.toLowerCase();
if(answer==word){
    
if(answer_turn=="player_1")
{
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;

}
else{

player2_score=player2_score+1;
document.getElementById("player2_score").innerHTML=player2_score;


}}

if(question_turn=="player_1")

{

question_turn="player_2";
document.getElementById("player_question").innerHTML="question turn-"+player2_name;

}

else{

question_turn="player_1";
document.getElementById("player_question").innerHTML="question turn-"+player1_name;


}


if(answer_turn=="player_1")

{

answer_turn="player_2";
document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;

}

else{

answer_turn="player_1";
document.getElementById("player_answer").innerHTML="answer turn-"+player1_name;


}

document.getElementById("output").innerHTML="";


}