let games = [
    {
      gameDate: "2025-08-15",
      gameLocation: "State Farm Arena",
      hawksScore: 112,
      opponentName: "Celtics",
      opponentScore: 107,
      hawksWin: true
    },
    {
      gameDate: "2025-08-17",
      gameLocation: "Madison Square Garden",
      hawksScore: 98,
      opponentName: "Knicks",
      opponentScore: 104,
      hawksWin: false
    },
    {
      gameDate: "2025-08-19",
      gameLocation: "United Center",
      hawksScore: 121,
      opponentName: "Bulls",
      opponentScore: 121,
      hawksWin: false 
    }
  ];

function display(game){
    let html = `
        <tr>
            <td>${game.gameDate}</td>
            <td>${game.gameLocation}</td>
            <td>${game.hawksScore}</td>
            <td>${game.opponentName}</td>
            <td>${game.opponentScore}</td>
            <td>${game.hawksWin ? "Win" : "Loss"}</td>
        </tr>
    `;

    return html;
}

function showGames() {
    let container = document.getElementById("sports");
   
    games.forEach(game => {
      container.innerHTML += display(game);
    });
  
  
  }

  showGames();