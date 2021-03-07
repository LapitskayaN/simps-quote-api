// src/components/QuoteList.js
import React from "react";
import QuoteCard from "./QuoteCard";
/// An array of objects
import axios from 'axios';

class QuoteList extends React.Component {
  
 
  render () {
    const {quote}=this.state
    return (
    <div>       
       
       {/* {this.state.quoteData.map(quote => 
      <li>{quote.quote}</li>) }
       */}
      
        {quote.map(item => (
          <QuoteCard quote={item.quote} image={item.image} character={item.character} />
        ))}


       <button type="button" onClick={this.getQuote}>Get quote</button> 
    
    
    </div>
    
    )
  }


}







// const quotes = [
//   {
//     quote:
//       "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
//     character: "Homer Simpson",
//     image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
//   },
//   {
//     quote: "Nothing you say can upset us. We're the MTV generation.",
//     character: "Bart Simpson",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72"
//   },
//   {
//     quote: "That's where I saw the leprechaun...He told me to burn things.",
//     character: "Ralph Wiggum",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72"
//   },
//   {
//     quote:
//       "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone.",
//     character: "Principal Skinner",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72"
//   }
// ];
  
// const QuoteList = () => (
//   <div>
//     {quotes.map(item => (
//       <QuoteCard quote={item.quote} image={item.image} character={item.character} />
//       ))
//     }
//   </div>
// );
  
export default QuoteList;