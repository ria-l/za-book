function workOrPlay() {
  console.log('click');

  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(4);
  x = Math.floor(
      Math.random() * (maxFloored - minCeiled + 1) +
      minCeiled);  // The maximum is inclusive and the minimum is inclusive


  answer = false;
  if (x == 1) {
    answer = true;
  }
  div = document.getElementById('answer');
  div.innerHTML = answer ? `${x}: play` : `${x}: work`;
  coin = document.getElementById('coin');
  coin.innerHTML = answer ? '<img src=\'coin_glaceon.png\'>' :
                            '<img src=\'coin_glaceon.png\' class=\'grey\'>';
}