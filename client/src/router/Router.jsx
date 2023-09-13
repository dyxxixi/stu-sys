import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "../component/Home";
import About from "../component/About";
import AddOrEdit from "../component/AddOrEdit";
import Detail from "../component/Detail";
import Email from "../component/Email";
import Tel from "../component/Tel";

function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate replace to='/home' />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />,
      children: [
        {
          path: 'email',
          element: <Email />
        },
        {
          path: 'tel',
          element: <Tel />
        },
        {
          path: '',
          element: <Navigate replace to='tel' />
        }
      ]
    },
    {
      path: '/add',
      element: <AddOrEdit />
    },
    {
      path: '/edit/:id',
      element: <AddOrEdit />
    },
    {
      path: '/detail/:id',
      element: <Detail />
    }
  ])
}

export default Router;
