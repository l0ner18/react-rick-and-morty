import './App.css';
import { Card } from './Components/Card/Card';
import { Header } from './Components/Header/Header';

function App() {
 const data = [
  {
    name: 'Apple',
    price: 1000,
    img: 'https://it-tehnik.ru/wp-content/uploads/luchshie-telefony-do-17000-rubley-2021_1.jpg',
  },
  {
    name: 'Aaaaaa',
    price: 0,
    img: 'https://i.pinimg.com/originals/11/a9/ab/11a9ab9aaf6346c7c0f186151fbd40bf.jpg',
  },
  {
    name: 'fsdfa',
    price: 1000,
    img: 'https://poisktehniki.ru/wp-content/uploads/2019/09/%D0%A2%D0%BE%D0%BF-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D1%85-%D0%B8-%D0%BC%D0%BE%D0%B4%D0%BD%D1%8B%D1%85-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BE%D0%B2-2019-%D0%B3%D0%BE%D0%B4%D0%B0.jpg',
  },
 ]

  return (
    <div className="App">
      <Header phone={'89270000000'}/>
      <div className='container'>
        <div className='wrapper'>
          {data.map((el, index) => (
            <Card data={el} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
