export function computerThrow(throwNum) {
    if (throwNum === 0) return 'rock';
    if (throwNum === 1) return 'paper';
    if (throwNum === 2) return 'scissors';

}

export function didUserWin(userThrow, computerThrow) {
    if (userThrow === computerThrow) return 'draw';

    const winMoves = [['rock', 'scissors'], ['paper', 'rock'], ['scissors', 'paper']];
    const loseMoves = [['rock', 'paper'], ['paper', 'scissors'], ['scissors', 'rock']];

    for (let i = 0; i < winMoves.length; i++){
        if (userThrow === winMoves[i][0] && computerThrow === winMoves[i][1]) {
            return 'win';
        }
    }

    for (let i = 0; i < loseMoves.length; i++){
        if (userThrow === loseMoves[i][0] && computerThrow === loseMoves[i][1]) {
            return 'lose';
        }
    }
}