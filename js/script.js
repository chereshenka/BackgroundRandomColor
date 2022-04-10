const button = document.getElementById('btn');
const span = document.querySelector('.hexColor');
const hex = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

button.addEventListener('click', () =>{
   const color = backgroundRandomChanger();
   document.body.style.backgroundColor = color;
   span.style.color = color;
   span.innerHTML = color;
});

function getRandomNumber(){
   return Math.floor(Math.random() * hex.length);
}

function backgroundRandomChanger(){
   let hexColor = '#';
   for(let i = 0; i < 6; i++){
      hexColor += hex[getRandomNumber()];
   }
   return hexColor;
}