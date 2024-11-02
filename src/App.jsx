// App.jsx
import { app } from "./firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "./App.css";
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import UserForm from "./components/UserForm";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

const auth = getAuth(app);

// Define the router inside App component
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin", // Define a route for SignIn
    element: <SignIn />,
  },
  {
    path: "/userForm",
    element: <UserForm />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* The router will handle rendering the components based on the path */}
    </>
  );
}

export default App;
