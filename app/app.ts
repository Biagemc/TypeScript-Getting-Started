function StartGame() {
    var messageElement = document.getElementById('messages')
    messageElement!.innerText = 'Welcome to MultiMath!'
}

document.getElementById('startGame')!.addEventListener('click', StartGame);