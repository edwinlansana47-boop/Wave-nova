const players = document.querySelectorAll("audio");
players.forEach(player => {
    player.addEventListener("play", function() {
        players.forEach(other => {
            if (other !== player) {
                other.pause();
                other.currentTime = 0;
            }
        });
    });
});