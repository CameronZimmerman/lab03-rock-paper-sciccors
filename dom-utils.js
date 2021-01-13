
export function showComputerSelectionImg(computerThrowString, element) {
    if (computerThrowString === 'rock') element.src = 'assets/rock.jpg';
    if (computerThrowString === 'paper') element.src = 'assets/paper.jpg';
    if (computerThrowString === 'scissors') element.src = 'assets/scissors.png';
}



