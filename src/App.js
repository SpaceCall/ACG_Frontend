import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './layout/Header';
import Main from './layout/Main';
import Login from './components/main/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header />
        <Main /> */}
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
