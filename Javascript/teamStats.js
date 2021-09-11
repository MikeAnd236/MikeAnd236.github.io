const team = {
    _players: [
        {
            firstName: "Khoa",
            lastName: "Pham",
            age: 18,
        },
        {
            firstName: "Anh",
            lastName: "Nguyen",
            age: 16,
        },
        {
            firstName: "Lavie",
            lastName: "Pham",
            age: 10,
        },
    ],
    _games: [
        {
           opponent: "Broncos",
           teamPoints: 24,
           opponentPoints: 16,
        },
        {
            opponent: "Soccer",
            teamPoints: 47,
            opponentPoints: 24,
         },
         {
            opponent: "Basketball",
            teamPoints: 38,
            opponentPoints: 21,
         },
    ],
    get players(){
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        };
        this.players.push(player);


    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        };
        this.games.push(game);
        
    }
}
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Water polo", 29, 33);
team.addGame("Baseball", 39, 50);
team.addGame("Swimming", 23, 24);
console.log(team.games);