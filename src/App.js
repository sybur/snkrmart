import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div style={{ margin: "1rem"}}>
      <h1>SnkrMart</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
