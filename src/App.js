import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Header/Header';
import { HomePage } from './Components/Pages/HomePage/HomePage';
import { AboutPage } from './Components/Pages/AboutPage/AboutPage';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => setData(res.data.results))
    .catch(err => console.log(err))
  }, [page])

  return (
    <BrowserRouter>
      <div className="App">
        <Header phone={'89270000000'} />
        <div className='container'>
          <div className='content'>
            <Routes>
              <Route path='/' element={<HomePage data={data} page={page} pressHandler={setPage}/>} />
              <Route path='/about' element={<AboutPage/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
