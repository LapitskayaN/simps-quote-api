//import logo from './logo.svg';
import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

class App extends React.Component {
  
  constructor(){
    super()
    this.state={
      quote: '',
      image: '',
      character: ''
    }
    this.getQuote=this.getQuote.bind(this)
  }
     
  getQuote() {
    axios.get( 'https://simpsons-quotes-api.herokuapp.com/quotes'      
      // 'https://randomuser.me/api?nat=en'
      //  'https://jsonplaceholder.typicode.com/users'           
    )    
      
    // Extract the DATA from the received response
    // .then(response => response.data)
      // Use this data to update the state
    .then(response  => {
      // console.log(response);
      this.setState({ 
        quote: response.data[0].quote,
        image: response.data[0].image,
        character: response.data[0].character,
      });

    });
  }
 
  render() {
  
    return (
    
      <div className="App">
        <Navbar />
        <QuoteCard 
          quote={this.state.quote} 
          image={this.state.image} 
          character={this.state.character} 
        />
        <button 
          type="button" 
          onClick={this.getQuote}>Get quote
        </button> 
      </div>      
    );
  }
}





// function App() {
//   return (
//     <div className="App">
//         <Navbar />
//         <QuoteCard
//         quote="I believe the children are the future... Unless we stop them now!"
//         character="sssHomer Simpson"
//         image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
//       />
//         <QuoteCard
//         quote="Me fail English? That's unpossible"
//         character="Ralph Wiggum"
//         image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
//       />
   

//       <QuoteList />
//     </div>
//   );
// }

export default App;

