function workOrPlay() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    // The maximum is inclusive and the minimum is inclusive
    const x = Math.floor(
      Math.random() * 
        (maxFloored - minCeiled + 1)
        + minCeiled); 
    
    let answer = false;
    if (x == 1) {
        answer = true;
    }
    
    // Retrieve play and work counts from localStorage
    let playCount = parseInt(localStorage.getItem('play_count')) || 0;
    let workCount = parseInt(localStorage.getItem('work_count')) || 0;

    // Update the respective count based on the answer
    if (answer) {
        playCount++;
        localStorage.setItem('play_count', playCount);
    } else {
        workCount++;
        localStorage.setItem('work_count', workCount);
    }

    // Calculate percentage of play vs work
    const total = playCount + workCount;
    const per = total > 0 ? (playCount / total) * 100 : 0; // Avoid division by 0

    // Update the count display
    const countDiv = document.getElementById('count');
    countDiv.innerHTML = `${playCount}/${total} = ${per.toFixed(2)}%`; // Use toFixed for better precision

    // Update the coin image based on the result
    const coin = document.getElementById('coin');
    coin.innerHTML += answer ? 
        '<img src="coin_glaceon.png">' : 
        '<img src="coin_glaceon.png" class="grey">';
}
