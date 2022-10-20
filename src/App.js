import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Component/Main";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";
import Order from "./Component/Order";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

      children: [
        {
          path: "/",
          element: <Login></Login>,
        },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <Order></Order>
            </PrivateRoute>
          ),
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
