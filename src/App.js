import './App.css';
import Appbar from './components/Appbar'
import Pet from './components/Pet';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ResponsiveAppBar from './components/Nav';
import {Route, Routes} from "react-router"
import AddPet from './components/AddPet';
import ListarPet from './components/ListarPet';
import AddServico from './components/AddServico';
import ListarServico from './components/ListarServico';
// import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <ResponsiveAppBar/>
      <Routes>
      <Route path="/pets" element={<ListarPet />}/>
      <Route path="/addpet" element={<AddPet/>} />
      <Route path="/pets/edit/:id" element={<AddPet/>} />
      <Route path="/addservico" element={<AddServico/>} />
      <Route path="/servicos" element={<ListarServico/>} />
      <Route path="/servicos/edit/:id" element={<AddServico/>} />
      {/* <Route path="/teste" element={<Home/>} /> */}

      {/* <Route path="/teste" element={<Home />}/> */}
        {/* <Route path="/pets" element={<Pet />}/> */}
      </Routes>
    </div>
  );
}




// function App() {
//   return (
//     <div className="App">
//     <Appbar/>
//     <Pet/>
   
//     </div>
//   );
// }

export default App;
