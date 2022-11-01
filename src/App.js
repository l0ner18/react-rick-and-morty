import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import {Provider} from 'react-redux'
import { Header } from './Components/Header/Header';
import { HomePageContainer } from './Components/Pages/HomePage/HomePage';
import { AboutPage } from './Components/Pages/AboutPage/AboutPage';
import { store } from './redux/store';


function App() {
  
  return (
    <BrowserRouter>
      <Provider store={store}>
      <div className="App">
        <Header phone={'89270000000'} />
        <div className='container'>
          <div className='content'>
            <Routes>
              <Route path='/' element={<HomePageContainer/>} />
              <Route path='/about' element={<AboutPage/>} />
            </Routes>
          </div>
        </div>
      </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
