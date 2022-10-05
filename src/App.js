
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {

  const routeList = createBrowserRouter([

    {
      path: '/', element: <div> hello</div> 
    },
    {
      path: '/home', element: <div> Home</div> 
    },
    {
      path: '/friends', element: <div> Friends</div> 
    },
    {
      path: '/about', element: <div> About</div> 
    },
    {
      path: '/contact', element: <div> Contact us</div> 
    },

  ])


  return (
    <div className="App">
        <RouterProvider router={routeList}/>
    </div>
  );
}

export default App;
