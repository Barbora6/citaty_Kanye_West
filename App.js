
import { useState } from 'react'

const App = () => {

  const url = 'https://api.kanye.rest'

  const[quote, setQuote] = useState(' citáty Kanye West')


  const getQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setQuote(data['quote'])
  }

  return <div className='container'>
      <div className='quote'>
      <h1>{quote}</h1>
      </div>
      <button onClick={() => getQuote()}>nový citát</button>
    </div>
}

export default App