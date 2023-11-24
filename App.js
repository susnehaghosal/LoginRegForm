import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Appheader from './Appheader';
import Customer from './Customer';
import NewtownCorpPage from './NewtownCorpPage';
// import ServiceButton from './ServiceButton';
// import ServiceDetails from './ServiceDetails';
import CertificateForm from './CertificateForm';
import TreePlantationPage from './TreePlantationPage';
import Sanitation from './Sanitation';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Appheader></Appheader>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/NewtownCorpPage' element={<NewtownCorpPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/customer' element={<Customer/>}></Route>
        <Route path='/TreePlantationPage' element={<TreePlantationPage/>}></Route>
        <Route path='/Sanitation' element={<Sanitation/>}></Route>
        <Route path='/CertificateForm' element={<CertificateForm/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
