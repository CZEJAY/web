import { useEffect } from 'react';
import './App.css';
//c6029d7f

const API_URL = 'http://www.omdbapi.com?apikey=c6029d7f';

const App = () => {
  const SearchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`)
    const data = await response.json();

    console.log(data)
  }

  useEffect(() => {
    SearchMovies('Spiderman')
  }, []);

  return (
    <div className="App">
      <h2>App</h2>
    </div>
  );
}

export default App;
 