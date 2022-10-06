
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AboutUS from './component/About/AboutUS';
import Contact from './component/Contact/Contact';
import Details from './component/Details/Details';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import Post from './component/Post/Post';
import PostDetails from './component/PostDetails/PostDetails';
import Main from './layout/Main/Main';



function App() {

  const routeList = createBrowserRouter([



    {
      path: '/', element: <Main></Main>, children: [

        {
          path: '/home', element: <Home></Home>
        },



        {
          path: '/friends', 
          element: <Friends></Friends>,
          loader: async ()=> {
             return fetch('https://jsonplaceholder.typicode.com/users');
          },
          
        },





        {
          path: '/about', element: <AboutUS></AboutUS>
        },



        {
          path: '/friends/:friendsID', 
          loader: async({params})=> {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendsID}`)
          },
          element: <Details></Details>
        },



        {
          path: '/posts', element: 
          <Post></Post>,
          loader: async ()=> {
            return fetch("https://jsonplaceholder.typicode.com/posts");

          },
        },


        {
          path: '/post/:postId',

          element: <PostDetails></PostDetails>,

          loader: async({params})=> {
              return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          }
        }



    
      ]
    },

    {
      path: '/contact', element: <Contact></Contact>
    },



    {
      path: '*', element: <div>Route Not Found!</div>
    }



  ])


  return (
    <div className="App">
      <RouterProvider router={routeList} />
    </div>
  );
}

export default App;
