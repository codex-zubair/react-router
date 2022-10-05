
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import Main from './layout/Main/Main';



function App() {

  const routeList = createBrowserRouter([



    {
      path: '/', element: <Main></Main>, children: [

        {
          path: '/home', element:<Home></Home>
        },
        {
          path: '/friends', element: <Friends></Friends>
        },

      ] 
    },


    {
      path: '/about', element: <div>This is all about</div>
    },


    {
      path: '*', element: <div>Route Not Found!</div>
    }

   
   
  ])


  return (
    <div className="App">
        <RouterProvider router={routeList}/>
    </div>
  );
}

export default App;
