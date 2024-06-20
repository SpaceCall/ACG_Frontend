import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './components/footer';
import Context from './context/Context';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Context>
          <Header />
          <Main />
          <Footer />
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
