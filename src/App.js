import React, {useState, useEffect} from 'react'
import Quote from './componentes/Quote';
import Spinner from './componentes/Spinner'


const initiaQuote = {
  text: 'Quote',
  author: 'Author :)'
}

function App() {
   
const [quote, setQuote] = useState(initiaQuote);
const [loading, setLoading] = useState(false);

const updateQuote = async () => {
  setLoading(true)
  const url = "https://breakingbadapi.com/api/quote/random"
  const res = await fetch(url);
  const [newQuote] = await res.json();
  console.log(newQuote);

  const { quote: text, author } = newQuote;
  setQuote ({
    text,
    author
  })
  setLoading(false)
}

useEffect(() => {
 updateQuote();
}, []);


  return (
    
    <div className="app">
    <div className='redes'>
      <a href='https://www.linkedin.com/in/francisco-palencia-704a0823a/'>
      <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="linkedin" id="linkedin"/>
      </a>
      <a href='https://github.com/francisco-programmer'>
      <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="github" id='github' />
      </a>
      </div>
      
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt="logo" id="logo"/>
      <button onClick={updateQuote}>Get Another</button>
 
{ loading ? <Spinner /> : <Quote quote={quote} /> }

    </div>
    
  );
}

export default App;
