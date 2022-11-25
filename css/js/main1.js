function clock() {
  const date = new Date(); //todo: I create date
  
  const hours = ((date.getHours() + 11) % 12 + 1); //todo: I create hours, minutes, seconds and match date
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const hour = hours * 30; 
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)` //todo: I add rotate in the my hour, minute, second object
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

clock();
setInterval(clock, 1000);