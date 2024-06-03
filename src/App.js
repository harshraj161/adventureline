import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import AdventureNav from './AdventureNav';
import AdventureRouter from './AdventureRouter';
import { BrowserRouter } from 'react-router-dom';
//import OwnerCanvaRoute from './Owner/OwnerCanvaRoute';



function App() {
  return (
    <>
      {/* <AdventureNav/> */}
      <BrowserRouter>
        <AdventureRouter />
      </BrowserRouter>
  {/* <OwnerCanvaRoute/> */}
    </>
  );
}

export default App;
