// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// stampa in console i numeri da 1 a 100 per i multipli di 15 stampo FizzBuzz per i multipli di 3 Fizz e per i multipli di 5 Buzz

for(let i = 1; i <= 100; i++ ){
  if(i % 3 === 0 && i % 5 ===0 ){
    console.log('FizzBuzz');
  }
  else if(i % 3 === 0){
    console.log('Fizz');
  }else if(i % 5 ===0){
    console.log('Buzz');
  }else{
  console.log(i);

  }
}

// provo a selezionare il container delle cards
let myContainerEl = document.querySelector('.my-container');


// let myCardWidth = "calc(100% / 7 * 1 - (10px / 7 *6))";

let newDivElement;

for(let i = 1; i <= 100; i++ ){
  newDivElement = document.createElement('div');
  
  newDivElement.className = 'my-card'; 
  
  

  myContainerEl.appendChild(newDivElement);
  let cardHeight = newDivElement.offsetWidth;
  newDivElement.style.height = cardHeight + "px";
  
  if(i % 3 === 0 && i % 5 ===0 ){
    newDivElement.innerHTML = 'FizzBuzz';
    newDivElement.style.backgroundColor = 'crimson'
  }
  else if(i % 3 === 0){
    newDivElement.innerHTML = 'Fizz';
    newDivElement.style.backgroundColor = '#0CD6A1'
  }else if(i % 5 ===0){
    newDivElement.innerHTML = 'Buzz';
    newDivElement.style.backgroundColor = '#FFD166'

  }else{
    newDivElement.innerHTML = i;

  }
  
  
}

// window.addEventListener('resize', function(){
//   // let boundingRect = newDivElement.getBoundingClientRect();
//   // let cardWidth = boundingRect.width;
//   let newDivElementWidth = newDivElement.offsetWidth;  
//   newDivElement.style.height = newDivElementWidth + "px";  
// }); 
  
  


