
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Company from './Component/Company';
import { Provider } from 'react-redux';
import compstore from './Redux/Store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={compstore}>
    <BrowserRouter>

      <Routes>
       <Route path='/' element={<Company></Company>}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer position='top-right'></ToastContainer>
    </Provider>
  );
}

export default App;
