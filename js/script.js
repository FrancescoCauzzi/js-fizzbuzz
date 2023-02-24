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
console.log(myContainerEl);

// let myCardWidth = "calc(100% / 7 * 1 - (10px / 7 *6))";



for(let i = 1; i <= 100; i++ ){
  let newDivElement = document.createElement('div');
  newDivElement.className = 'my-card';
  
  

  myContainerEl.appendChild(newDivElement);
}

