document.getElementById('fetch-dog').addEventListener('click',fetchDogImage);
document.getElementById('fetch-advice').addEventListener('click',fetchAdvice);
document.getElementById('fetch-btc').addEventListener('click',fetchBitcoinPrice);

function fetchDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response => response.json()))
    .then((data) => {
        document.getElementById('dog-image').innerHTML = `<img src="${data.message}" alt="Random Dog">`;
    })
   .catch(error => console.log('Error fetching dog image:',error));
}

function fetchAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('advice').innerHTML = data.slip.advice;
    })
    .catch(error => console.log('Error fetching advice:',error));
}

function fetchBitcoinPrice(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('bitcoin-price').innerHTML = `1 BTC = ${data.bpi.USD.rate} USD`;
    })
    .catch(error => console.log('Error fetching bitcoin price:',error));
}