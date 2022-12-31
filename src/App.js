import React from 'react';
import Stocks from './pages/Stocks';
import Quotes from './pages/Quotes';
import {createBrowserRouter , RouterProvider , Navigate} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/instruments',
    element: <Stocks/>,
  },
  {
    path: '/quotes/:id',
    element: <Quotes/>,
  },
  {
    path: '*',
    element: <Navigate to="/instruments" replace/>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
