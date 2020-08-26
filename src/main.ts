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

    messageScore(): String{
        if(this.player1Points == this.player2Points){
            switch(this.player1Points) {
                case 0:return 'love - love';break;
                case 1:return 'fifteen - fifteen';break;
                case 2:return 'thirty - thirty'; break;
                default:return 'deuce';break;
            }
        }else{
            if(this.player1Points > this.player2Points){
                return 'advantage player 1';
            }else{
                return 'advantage player 2';
            }
        }
    }
    checkWinner(playerScore:number, rivalScore:number) :boolean {
        return playerScore - rivalScore >=2 && playerScore >= 4;
    }
    winner() :String {
        if(this.checkWinner(this.player1Points, this.player2Points)) {
            return 'Player 1';
        }else if(this.checkWinner(this.player2Points, this.player1Points)) {
            return 'Player 2';
        }else{
            return 'No player win yet';
        }
    }
}

export function updateGameScore(player1Points:number, player2Points:number) {
    return new Game(player1Points, player2Points);
}

export function decideGameWinner(game:Game) {
    return game.winner();
}

export function printScore(list:any) {
    return updateGameScore(list[0],list[1]).messageScore();
}
