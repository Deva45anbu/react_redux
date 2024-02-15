import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouteData from './Routes';

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RouteData></RouteData>
    </BrowserRouter>
  );
}

export default App;
