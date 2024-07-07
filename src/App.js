import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import ContextProvider from './context/Context';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
