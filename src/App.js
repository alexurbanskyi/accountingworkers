import './App.css';
import {Route, Routes} from 'react-router-dom'
import Analytics from './Pages/Analytics/Analytics'
import Workers from './Pages/Workers/Workers';
import Layout from './Pages/Layout/Layout';
import Warehouse from './Pages/Warehouse/Warehouse';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Analytics/>}/>
        <Route path='workers' element={<Workers/>}/>
        <Route path='warehouse' element={<Warehouse/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
