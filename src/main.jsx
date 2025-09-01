 
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Products from './Pages/Products.jsx'
import Details from '../src/Pages/Details.jsx'
import Upload from './Pages/Upload.jsx';
import Innovations from './Pages/Innovations.jsx';
import SignIn from './Pages/SignIn.jsx';
import Login from "./Pages/Login.jsx"
import Profile from "./Pages/Profile.jsx"
 
 

const router = createBrowserRouter([

  {
    path:"/",
    element: <App/>,
  },
   
  {
    path:"/Products",
    element: <Products/>,
  },
   {
    path:"/Details/:id",
    element: <Details />,
  },
    {
    path:"/Upload",
    element: <Upload />,
  },
   {
    path:"/Innovations",
    element: <Innovations />,
  },
   {
    path:"/SignIn",
    element: <SignIn />,
  },
   {
    path:"/Login",
    element: <Login />,
  },
     {
    path:"/profile",
    element: <Profile />,
  },
   
   
   
]);



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

