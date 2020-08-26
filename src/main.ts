//
// Your implementations
// 
class Game {
    player1Points:number;
    player2Points:number;

    constructor(player1Points:number,player2Points:number){
        this.player1Points = player1Points;
        this.player2Points = player2Points;
    }
}

export function checkWinner(playerScore:number, rivalScore:number) {
    return playerScore - rivalScore >=2 && playerScore >= 4;
}

export function updateGameScore(player1Points:number, player2Points:number) {
    return new Game(player1Points, player2Points);
}

export function decideGameWinner(game:Game) {
    if(checkWinner(game.player1Points, game.player2Points)) {
        return 'Player 1';
    }else if(checkWinner(game.player2Points, game.player1Points)) {
        return 'Player 2';
    }else{
        return 'No player win yet';
    }
}

export function printScore(list:any) {
    return messageScore(updateGameScore(list[0],list[1]));
}

export function messageScore(game:Game) {
    if(game.player1Points == game.player2Points){
        switch(game.player1Points) {
            case 0:return 'love - love';break;
            case 1:return 'fifteen - fifteen';break;
            case 2:return 'thirty - thirty'; break;
            default:return 'deuce';break;
        }
    }else{
        if(game.player1Points > game.player2Points){
            return 'advantage player 1';
        }else{
            return 'advantage player 2';
        }
    }
}