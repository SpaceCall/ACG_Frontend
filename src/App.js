import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './layout/Header';
import Main from './layout/Main';
import Login from './components/main/Login';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Main /> */}
        {/* <Login /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
