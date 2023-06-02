import './App.css';
import Login from './components/Login'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Root from './components/Root'
import Schedule from './components/Schedule'
import Choreographer from './components/Сhoreographer';
import Student from './components/Student';
import LK from './components/LK';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/schedule',
          element: <Schedule/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/choreographer',
          element: <Choreographer/>
        },
        {
          path: '/student',
          element: <Student/>
        },
        {
          path: '/lk',
          element: <LK/>
        }
      ]
    }
  ]
)


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
