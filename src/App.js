import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./component/SignUp/signup";
import Login from "./component/login/Login";
import Header from './component/header/Header'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children:[
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },       
      ]
    },
  ]);
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
