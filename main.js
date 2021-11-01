function userid()
{
   first_name = document.getElementById("player1_name").value;
   Second_name = document.getElementById("player2_name").value;
   localStorage.setItem("Player.1",first_name);
   localStorage.setItem("Player.2",Second_name);
   window.location = "Game.html";
}




