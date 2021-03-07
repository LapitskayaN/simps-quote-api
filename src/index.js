// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import axios from 'axios';
//import reportWebVitals from './reportWebVitals';


  
let getQuote=()=> {
  axios.get( 'https://simpsons-quotes-api.herokuapp.com/quotes')    

   .then(response => response.data)
    .then(data => {
  
    const quoteHtml = `
      <p><strong>${data[0].quote}</strong></p>
      <img src="${data[0].image}" />
      <p>${data[0].character}</p>
    `;
    document.querySelector('.content').innerHTML = quoteHtml;
   
  });

}
const btn=document.querySelector('.btn')
btn.addEventListener('click',getQuote);





// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

