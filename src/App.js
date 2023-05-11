import { BrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import router from './component/router/router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
