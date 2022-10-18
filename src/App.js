import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';

import Orders from './components/Orders/Orders';
import Register from './components/Register/Register';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: '/shipment',
          element: <PrivateRoute><Shipment></Shipment></PrivateRoute>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }

  ]);

  return (

    <RouterProvider router={router}></RouterProvider>

  );
}


export default App;
