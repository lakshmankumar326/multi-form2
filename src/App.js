import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './Pages/Form';
import SideBar from './Components/SideBar';
import Finish from './Pages/Finish';
import Header from './Components/Header';



function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={ <Form/>} />

          <Route path="/home" element={<Finish/>}/>
          
          <Route path="*" element={<> <Header /> Page Under Constraction</>} />
        </Routes>
        
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
